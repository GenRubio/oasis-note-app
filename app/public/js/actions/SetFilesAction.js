export const SetFilesAction = {
    init() {
        this.setFilesData();
    },
    setFilesData(){
        $.getJSON("../../../src/database/files_collection.json", function (data) {
            window.filesDB = data;
        });
    }
};
