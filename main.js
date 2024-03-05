function preload()
{
}

function setup()
{
    canvas = createCanvas(680,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide()
    
    tint_color = ""
}

function draw()
{
    fill(0,25,100);
    circle(30,100,50,100);

    fill(21,56,49);
    circle(150,100,50,100);

    fill(129,99,112);
    circle(250,100,50,100);

    image(video,200,200,200,200);
    tint(tint_color);
}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}