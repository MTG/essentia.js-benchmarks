function downloadJson(jsonObj, fileName, downElem){
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonObj));
    downElem.setAttribute("href", dataStr);
    downElem.setAttribute("download", fileName);
    downElem.click();
}

export {downloadJson as default};