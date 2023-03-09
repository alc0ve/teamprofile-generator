//generate html
const generateHtml = (team) => {
    console.log(`render html js ${team}`);
    //Empty array for html elements and the looping of data
    const html = [];
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
    
    </div>
    </div>
</body>

</html>
    `
}