let song;
let fft;
let playBtn;
let isPlaying = false;
let canvas;
let coverImg;


function setup() {
    let container = select('#canvas-container');
    let w = container.width;
    let h = container.height;

    canvas = createCanvas(w, h);
    canvas.parent('canvas-container');

    angleMode(DEGREES);

    fft = new p5.FFT(0.8, 128);

    playBtn = select('#playBtn');
    playBtn.mousePressed(togglePlay);

    // Load assets asynchronously
    song = loadSound('assets/Seigfried.mp3',
        () => { console.log('Song loaded'); },
        (err) => { console.error('Error loading song:', err); }
    );

    coverImg = loadImage('assets/cover.jpg',
        () => { console.log('Cover loaded'); },
        (err) => { console.error('Error loading cover:', err); }
    );

    // Initial volume (might need to wait for song load, but usually safe to set property)
    // song.setVolume(0.5); // Move to togglePlay or check if loaded
}

function draw() {
    // Draw Cover Art if loaded
    if (coverImg && coverImg.width > 0) { // Check if coverImg is loaded and has dimensions
        image(coverImg, 0, 0, width, height);
    } else {
        background(20);
        fill(255);
        textAlign(CENTER, CENTER);
        text('Loading Cover...', width / 2, height / 2);
    }

    // Add a dark overlay
    background(0, 100);

    let spectrum = fft.analyze();
    let waveform = fft.waveform();

    translate(width / 2, height / 2);

    // Visualizer

    // 1. Waveform Circle
    noFill();
    stroke(255, 255, 255, 200);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < waveform.length; i += 2) {
        let angle = map(i, 0, waveform.length, 0, 360);
        let r = map(waveform[i], -1, 1, 60, 100);
        let x = r * cos(angle);
        let y = r * sin(angle);
        vertex(x, y);
    }
    endShape(CLOSE);

    // 2. Spectrum Bars (Subtle)
    strokeWeight(1);
    for (let i = 0; i < spectrum.length; i += 4) {
        let angle = map(i, 0, spectrum.length, 0, 360);
        let amp = spectrum[i];
        let r = map(amp, 0, 255, 100, 160);

        stroke(255, 255, 255, 100);

        push();
        rotate(angle);
        line(100, 0, r, 0);
        pop();
    }
}

function togglePlay() {
    if (!song || !song.isLoaded()) {
        console.log('Song not loaded yet');
        return;
    }

    if (song.isPlaying()) {
        song.pause();
        select('#playBtn').html('<i class="fas fa-play"></i>');
        isPlaying = false;
    } else {
        song.loop();
        select('#playBtn').html('<i class="fas fa-pause"></i>');
        isPlaying = true;
    }
}

function windowResized() {
    let container = select('#canvas-container');
    resizeCanvas(container.width, container.height);
}
