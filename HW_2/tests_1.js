let jsonData = pm.response.json();
pm.environment.set("token", jsonData.token);