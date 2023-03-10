const generateHtml = (team) => {
    console.log(`render html js ${team}`);
    //Empty array for html elements and the looping of data
    const html = [];

    //generate manager html
    const generateManager = manager => {
        const htmlManager = `
        <div class="card employee-card" style="width: 18rem;">
        <div class="card-header text-white bg-primary mb-3">
            <h2>${manager.name}<br></h2>
            <h3>☕️ Manager</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
        `;
        html.push(htmlManager);
    }

    //generate engineer html
    const generateEngineer = engineer => {
        const htmlEngineer = `
        <div class="card employee-card" style="width: 18rem;">
        <div class="card-header text-white bg-primary mb-3">
            <h2>${engineer.name}<br></h2>
            <h3>👓 Engineer</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${engineer.gitHubUsername}"> ${engineer.gitHubUsername}</a></li>
        </ul>
    </div>
        `;
        html.push(htmlEngineer);
    }

    //generate intern html
    const generateIntern = intern => {
        const htmlIntern = `
        <div class="card employee-card" style="width: 18rem;">
        <div class="card-header text-white bg-primary mb-3">
            <h2>${intern.name}<br></h2>
            <h3>🎓 Intern</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
        `;
        html.push(htmlIntern);
    }

        // Create loop for all employees
        for (let i = 0; i < team.length; i++) {
            if (team[i].getRole() === "Manager") {
                generateManager(team[i]);
            }
            if (team[i].getRole() === "Engineer") {
                generateEngineer(team[i]);
            }
            if (team[i].getRole() === "Intern") {
                generateIntern(team[i]);
            }
        }
    
        // Join the HTML sections
        return html.join('');
}


module.exports = team => {
    return `
 <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 p-5 mb-3 team-header">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>

    <div class="row">
    <div class="team-area col-12 d-flex justify-content-center">
    ${generateHtml(team)}
    </div>
    </div>
</body>

</html>
    `;
}