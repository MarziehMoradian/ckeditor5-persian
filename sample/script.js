function isArabic(text) {
  const arabicPattern = /[\u0600-\u06FF]/;
  return arabicPattern.test(text);
}
function customItemRenderer(item) {
  const span = document.createElement("span");
  span.textContent = item;

  if (isArabic(item)) {
    span.className = "text-rtl";
  } else {
    span.className = "text-ltr";
  }

  return span;
}
ClassicEditor.create(document.querySelector(".editor"), {
  mention: {
    feeds: [
      {
        marker: "@",
        feed: [
          "@exampleEnglish",
          "@مثال_فارسی",
          // ... add more items here
        ],
        itemRenderer: customItemRenderer,
      },
    ],
  },
})
  .then((editor) => {
    window.editor = editor;
  })
  .catch(handleSampleError);

function handleSampleError(error) {
  const issueUrl = "https://github.com/ckeditor/ckeditor5/issues";

  const message = [
    "Oops, something went wrong!",
    `Please, report the following error on ${issueUrl} with the build id "pqtijhuccq93-czgs3ksqssmt" and the error stack trace:`,
  ].join("\n");

  console.error(message);
  console.error(error);
}
