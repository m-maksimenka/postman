// 1
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2
const schema = {
    "type": "object",
    "properties": {
        "age": {
            "type": "string"
        },
        "family": {
            "type": "object",
            "properties": {
                "children": {
                    "type": "array",
                    "items": [
                        {
                            "type": "array",
                            "items": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "integer"
                                }
                            ]
                        },
                        {
                            "type": "array",
                            "items": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "integer"
                                }
                            ]
                        }
                    ]
                },
                "u_salary_1_5_year": {
                    "type": "integer"
                }
            },
            "required": [
                "children",
                "u_salary_1_5_year"
            ]
        },
        "name": {
            "type": "string"
        },
        "salary": {
            "type": "integer"
        }
    },
    "required": [
        "age",
        "family",
        "name",
        "salary"
    ]
}

pm.test("JSON schema is correct", function() {
    pm.response.to.have.jsonSchema(schema)
});

// 3
pm.test("Response property matches environment variable", function () {
    pm.expect(pm.response.json().name).to.eql(pm.environment.get("name"));
});

// 4
pm.test("Response property matches request property", function () {
    let requestData = request.data;
    let responseJson = pm.response.json();
    pm.expect(responseJson.age).to.eql(requestData.age);
});