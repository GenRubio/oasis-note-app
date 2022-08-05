export const SetFoldersAction = {
    init() {
        this.setFoldersData();
    },
    setFoldersData(){
        $.getJSON("../../../src/database/folders_collection.json", function (data) {
            window.foldersDB = data;
        });
    }
};
