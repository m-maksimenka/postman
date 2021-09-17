// 1
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2
pm.test("JSON schema is OK", function() {
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
                }
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
        }
    }
    pm.response.to.have.jsonSchema(schema)
});

// 3
pm.test("Multiplication result is correct", function() {
    const requestData = JSON.parse(request.data);
    const responseJson = pm.response.json();
    let salary = requestData.salary;
    let qa_salary_after_6_months = responseJson.qa_salary_after_6_months;
    let qa_salary_after_12_months = responseJson.qa_salary_after_12_months;
    let u_salary_1_5_year = responseJson.person.u_salary_1_5_year;
    pm.expect(qa_salary_after_6_months).to.eql(salary * 2);
    pm.expect(qa_salary_after_12_months).to.eql(salary * 2.9);
    pm.expect(u_salary_1_5_year).to.eql(salary * 4);
});

// 4
let jsonData = pm.response.json();
pm.environment.set("salary", jsonData.person.u_salary_1_5_year);