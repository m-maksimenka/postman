// 1 
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2
const schema = {
    "type": "object",
    "properties": {
        "Cur_Abbreviation": {
            "type": "string"
        },
        "Cur_ID": {
            "type": "integer"
        },
        "Cur_Name": {
            "type": "string"
        },
        "Cur_OfficialRate": {
            "type": "number"
        },
        "Cur_Scale": {
            "type": "integer"
        },
        "Date": {
            "type": "string"
        }
    },
    "required": [
        "Cur_Abbreviation",
        "Cur_ID",
        "Cur_Name",
        "Cur_OfficialRate",
        "Cur_Scale",
        "Date"
    ],
    "additionalProperties": false
}

pm.test("JSON schema is correct", function() {
    pm.response.to.have.jsonSchema(schema)
});