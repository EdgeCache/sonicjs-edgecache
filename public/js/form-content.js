//        Formio.builder(document.getElementById('builder'), {}, {});
var contentTypeComponents;
var table;

(function () {
  const url = window.location.href;

  const params = url.split("/");
  table = window.location.href.split("/").pop();

  var mode;

  if (url.indexOf("admin/content/new") > 0) {
    mode = "new";
  }

  if (url.indexOf("admin/content/edit") > 0) {
    mode = "edit";
  }

  if (!mode) {
    return;
  }

  if (mode == "edit") {
    editContent();
  }

  if (mode == "new") {
    newContent();
  }
})();

function newContent() {
  console.log("contentType", table);

  axios.get(`/v1/form-components/${table}`).then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);

    Formio.icons = "fontawesome";
    // Formio.createForm(document.getElementById("formio"), {
    Formio.createForm(document.getElementById("formio"), {
      components: response.data,
    }).then(function (form) {
      form.on("submit", function (data) {
        saveNewContent(data);
      });
      form.on("change", async function (event) {
        $("#contentFormSaveButton").removeAttr("disabled");
        if (event.components) {
          contentTypeComponents = event.components;
          console.log("event ->", event);
        }
      });
    });
  });
}

function saveNewContent(data) {
  delete data.data.submit;
  delete data.data.id;
  console.log(data);

  axios.post(`/v1/${table}`, data).then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    if (response.status === 200 || response.status === 201) {
      location.href = `/admin/tables/${data.data.table}`;
    }
  });
}
function editContent() {
  const contentId = $("#formio").attr("data-id");
  table = $("#formio").attr("data-table");

  console.log("contentType", contentId);
  axios.get(`/v1/${table}/${contentId}?includeContentType`).then((response) => {
    console.log(response.data);

    Formio.icons = "fontawesome";
    // Formio.createForm(document.getElementById("formio"), {
    Formio.createForm(document.getElementById("formio"), {
      components: response.data.contentType,
    }).then(function (form) {
      form.on("submit", function ({data}) {
        if (data.id) {
          updateContent(data);
        } else {
          addContent(data);
        }
      });
      form.submission = {
        data: response.data,
      };
      form.on("change", async function (event) {
        $("#contentFormSaveButton").removeAttr("disabled");
        if (event.components) {
          contentTypeComponents = event.components;
          console.log("event ->", event);
        }
      });
    });
  });
}

function addContent(data) {
  data.key = table;

  axios.post(`/v1/${table}`, data).then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    if (response.status === 201 || response.status === 204) {
      location.href = "/admin";
    }
  });
}

function updateContent(data) {
  delete data.submit;
  delete data.contentType;

  axios.put(`/v1/${table}`, {data: {data}}).then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    if (response.status === 200) {
      location.href = `/admin/tables/${data.table}`;
    } else{
      alert('Error occured updating ' + data.id)
    }
  });
}
