// 1
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2
pm.test("JSON schema is OK", function() {
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
                }
            },
            "name": {
                "type": "string"
            },
            "salary": {
                "type": "integer"
            }
        }
    }
    pm.response.to.have.jsonSchema(schema)
});

// 3
pm.test("Response property matches environment variable", function () {
    pm.expect(pm.response.json().name).to.eql(pm.environment.get("name"));
});

// 4
pm.test("Response property matches request property", function () {
    const requestData = request.data;
    const responseJson = pm.response.json();
    pm.expect(responseJson.age).to.eql(requestData.age);
});