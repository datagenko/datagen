// JSON Highlight
const json_input_hidden = document.getElementById("json-input");
const textarea = document.getElementById('json-input-highlight');
const textarea_output = document.getElementById('json-output');

// 에디터 설정
const editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,  // 라인넘버
    lineWrapping: true, // 줄바꿈
    theme: "dracula",
    mode: "javascript",
    styleActiveLine: true,
    matchBrackets: true,
});
editor.setSize("100%", "100%");
// font-size 조정
editor.getWrapperElement().style["font-size"] = "1.2em";
// 모서리 조정
editor.getWrapperElement().style["border-radius"] = "0.8em";
// line-height 조정
editor.getWrapperElement().style["line-height"] = "1.5em";

// json_input_hidden textarea 에디터에 입력된 값 가져오기
editor.setValue(json_input_hidden.value);

// editor에 값이 변경될 때마다 json_input_hidden에 값 넣어주기
editor.on("change", function (cm, change) {
    json_input_hidden.value = cm.getValue();
});

// 에디터 설정
let output_codemirror = CodeMirror.fromTextArea(textarea_output, {
    lineNumbers: true,  // 라인넘버
    lineWrapping: true, // 줄바꿈
    theme: "dracula",
    mode: "javascript",
    readOnly: 'nocursor',
});
output_codemirror.setSize("100%", "100%");
// font-size 조정
output_codemirror.getWrapperElement().style["font-size"] = "1.2em";
// line-height 조정
output_codemirror.getWrapperElement().style["line-height"] = "1.5em";
// background-color 조정
output_codemirror.getWrapperElement().style["background-color"] = "#2f353f !important";
// backgroud