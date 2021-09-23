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
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "type": "array",
                            "minItems": 2,
                            "maxItems": 2,
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
                            "minItems": 2,
                            "maxItems": 2,
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
            ],
            "additionalProperties": false
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
    ],
    "additionalProperties": false
}

let jsonData = pm.response.json();

pm.test('JSON schema is valid', function () {
    pm.expect(tv4.validate(jsonData, schema)).to.be.true;
});

// 3
pm.test("Response property matches environment variable", function () {
    pm.expect(pm.response.json().name).to.eql(pm.environment.get("name"));
});

// 4
let requestData = request.data;

pm.test("Response property matches request property", function () {
    pm.expect(jsonData.age).to.eql(requestData.age);
});