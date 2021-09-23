// 1
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2
const schema = {
    "type": "object",
    "properties": {
        "person": {
            "type": "object",
            "properties": {
                "u_age": {
                    "type": "integer"
                },
                "u_name": {
                    "type": "array",
                    "minItems": 3,
                    "maxItems": 3,
                    "items": [
                        {
                            "type": "string"
                        },
                        {
                            "type": "integer",
                        },
                        {
                            "type": "integer"
                        }
                    ]
                },
                "u_salary_1_5_year": {
                    "type": "integer"
                }
            },
            "required": [
                "u_age",
                "u_name",
                "u_salary_1_5_year"
            ],
            "additionalProperties": false
        },
        "qa_salary_after_12_months": {
            "type": "integer"
        },
        "qa_salary_after_6_months": {
            "type": "integer"
        },
        "start_qa_salary": {
            "type": "integer"
        }
    },
    "required": [
        "person",
        "qa_salary_after_12_months",
        "qa_salary_after_6_months",
        "start_qa_salary"
    ],
    "additionalProperties": false
}

let jsonData = pm.response.json();

pm.test("JSON schema is valid", function() {
    pm.expect(tv4.validate(jsonData, schema)).to.be.true;
});

// 3
let requestData = JSON.parse(request.data);
let salary = requestData.salary;
let qa_salary_after_6_months = jsonData.qa_salary_after_6_months;
let qa_salary_after_12_months = jsonData.qa_salary_after_12_months;
let u_salary_1_5_year = jsonData.person.u_salary_1_5_year;

pm.test("Multiplication by 2 is correct", function() {
    pm.expect(qa_salary_after_6_months).to.eql(salary * 2);
});

pm.test("Multiplication by 2.9 is correct", function() {
    pm.expect(qa_salary_after_12_months).to.eql(salary * 2.9);
});

pm.test("Multiplication by 4 is correct", function() {
    pm.expect(u_salary_1_5_year).to.eql(salary * 4);
});

// 4
pm.environment.set("salary", jsonData.person.u_salary_1_5_year);