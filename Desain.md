# Portfolio Maximalism — Design System

## Concept

Personal portfolio dengan visual Maximalism yang eksperimental, dense, editorial, dan interactive.

Fokus:

* Typography besar
* Asymmetrical layout
* Layered composition
* Strong contrast
* Experimental spacing
* Interactive elements
* Motion yang terkontrol

Website harus terasa seperti personal creative developer portfolio, bukan template portfolio generik.

## Visual Direction

Style:

* Maximalism
* Editorial
* Experimental
* Digital
* Bold
* Asymmetrical
* Interactive

Hindari:

* Gradient
* Glassmorphism
* Neon cyberpunk
* Terlalu banyak card
* Border radius berlebihan
* Shadow berlebihan
* Layout yang terlalu simetris
* Decorative element yang tidak punya fungsi

## Color

Background:
#111111

Primary:
#F2F0EA

Accent:
#FF4D00

Secondary Accent:
#A8FF00

Muted:
#777777

Border:
#2A2A2A

Accent digunakan sebagai highlight, bukan sebagai background utama.

## Typography

Primary:
Poppins

Display:
Space Grotesk

Monospace:
JetBrains Mono

Heading:

* Extra Bold
* Large
* Tight line-height
* Beberapa heading boleh uppercase

Body:

* Regular
* Readable
* Maximum width sekitar 650px

Typography harus menjadi salah satu elemen visual utama.

## Navigation

Navigation tidak menggunakan navbar standar.

Desktop:

PI                         WORK
ABOUT
CONTACT

Bisa menggunakan vertical navigation, floating navigation, atau layout asymmetrical.

Navigation tetap sederhana agar tidak bersaing dengan hero.

Saat scroll:

* Navbar mengecil
* Background menjadi solid
* Navigation tetap accessible

## Hero

Hero menjadi bagian paling dominan.

Gunakan layout asymmetrical dengan typography besar.

Contoh:

MUHAMMAD
RAFFI
BARZALLY

Frontend Developer

React · React Native · UI/UX

Decorative elements dapat berupa:

* Floating text
* Small metadata
* Technical information
* Moving shapes
* Interactive typography

Jangan menggunakan:

* Project numbering
* `//01`
* `01/04`
* Section counter
* Label generik yang terasa seperti template

## Hero Animation

Initial animation:

* Heading reveal
* Text stagger
* Decorative element movement
* Small parallax

Scroll:

* Typography bergerak horizontal
* Secondary text mengalami parallax
* Decorative element memiliki movement berbeda

Animation tidak boleh menyebabkan:

* Text overlap
* Layout shift
* Horizontal overflow

## About

About menggunakan editorial composition.

Jangan menggunakan large card.

Layout:

ABOUT ME

I BUILD WEB AND
MOBILE EXPERIENCES
WITH REACT.

Paragraph menjelaskan:

* Background
* Development focus
* Technology
* Design interest

Tambahkan skill atau technology marquee di area berbeda.

## Skills

Jangan menggunakan progress bar.

Gunakan interactive typography.

React
React Native
JavaScript
TypeScript
Tailwind
Node.js
Express
MySQL
Git
Figma

Hover:

* Typography berubah ukuran
* Accent muncul
* Cursor interaction
* Optional visual preview

## Projects

Projects tidak menggunakan numbering.

Jangan gunakan:

* Project 01
* Project 02
* 01/04
* //01
* Number counter

Setiap project memiliki:

Nama project

Deskripsi singkat

Technology

Preview

GitHub

Live Demo

Layout setiap project boleh berbeda.

Contoh:

STAGECASE

Premium event ticketing platform built with React, React Native, Express and MySQL.

React · React Native · Express · MySQL

View Project

Project berikutnya langsung dilanjutkan tanpa label nomor.

Project layout:

Project pertama:
Image kiri + information kanan

Project kedua:
Information kiri + image kanan

Project ketiga:
Large visual full width

Project keempat:
Large typography + small preview

Jangan membuat semua project menggunakan layout yang sama.

## Project Interaction

Hover:

* Preview muncul
* Typography bergerak sedikit
* Metadata muncul
* Cursor berubah

Click:
Buka project detail overlay.

Project detail berisi:

Project name

Description

Problem

Solution

Features

Technology

GitHub

Live Demo

## Project Detail Overlay

Gunakan large overlay, bukan modal card kecil.

Background:
#111111

Content dibuat editorial dan spacious.

Close button berada di corner.

Entrance:

* Fade
* Scale ringan
* Content reveal

## Marquee

Gunakan horizontal marquee untuk menambah movement.

Contoh:

REACT — FRONTEND — MOBILE — UI/UX — CREATIVE DEVELOPMENT —

Marquee:

* Bergerak lambat
* Tidak mengganggu readability
* Pause ketika hover jika diperlukan

## Experience

Gunakan editorial timeline.

Contoh:

2024
Started Programming

2025
Software Engineering Projects

2026
Graduated SMK Taruna Bhakti

2026
Frontend / Software Development

Jangan gunakan timeline card standar.

## Certificates

Certificate menggunakan interactive list.

Contoh:

Uji Level Rekayasa Perangkat Lunak

Web Development

Mobile Development

Hover:

* Row berubah ukuran
* Preview muncul
* Typography berubah
* Cursor interaction

Tidak perlu numbering.

## Contact

Contact menjadi salah satu section terbesar.

Contoh:

LET'S
BUILD
SOMETHING.

Email

LinkedIn

GitHub

Typography dibuat sangat besar dan menjadi focal point.

## Footer

PI

Muhammad Raffi Barzally

Frontend Developer

React · React Native · UI/UX

GitHub
LinkedIn
Email

© 2026

Footer tetap sederhana karena Contact sudah menjadi visual utama.

## Responsive

Desktop:

* Asymmetrical layout
* Large typography
* Hover interaction
* Custom cursor
* Complex composition

Tablet:

* Reduce typography
* Reduce decorative elements
* Maintain asymmetrical composition

Mobile:

* Single column
* No custom cursor
* Reduce animation
* Prevent text overflow
* Compact navigation
* Vertical project layout

Wajib memastikan:

* Tidak ada horizontal overflow
* Tidak ada text overlap
* Tidak ada element keluar viewport
* Fixed element tidak menutupi content

## Animation

Gunakan:

* Framer Motion
* GSAP
* Lenis

Prioritas:

1. Smooth scrolling
2. Typography reveal
3. Parallax
4. Hover interaction
5. Project transition
6. Overlay transition

Tidak semua element harus dianimasikan.

## Component Structure

src/

components/
├── Navbar.jsx
├── CustomCursor.jsx
├── Hero.jsx
├── About.jsx
├── Skills.jsx
├── Marquee.jsx
├── Projects.jsx
├── ProjectItem.jsx
├── ProjectOverlay.jsx
├── Experience.jsx
├── Certificates.jsx
├── Contact.jsx
└── Footer.jsx

pages/
└── Home.jsx

data/
├── projects.js
├── skills.js
└── certificates.js

hooks/
├── useCursor.js
└── useScroll.js

## Technology

Frontend:

* React
* Vite
* Tailwind CSS
* Framer Motion
* GSAP
* Lenis
* React Bits
* Lucide React

Optional:

* React Three Fiber
* Drei

3D hanya digunakan jika memang mendukung visual portfolio.

## Performance

* Lazy load images
* Optimize project images
* Reduce animation pada mobile
* Gunakan transform untuk animation
* Hindari excessive blur
* Hindari unnecessary DOM
* Jangan menjalankan R3F jika tidak diperlukan

## Design Rules

Gunakan:

* Typography sebagai visual
* Asymmetrical layout
* Experimental spacing
* Layered elements
* Editorial composition
* Interactive hover
* Controlled motion

Jangan gunakan:

* Gradient
* Project numbering
* Section numbering
* `//01`
* `01/04`
* Excessive cards
* Excessive rounded corners
* Excessive shadows
* Excessive animation
* Decorative element tanpa fungsi

## Final Direction

Portfolio harus terasa seperti gabungan:

Creative Developer Portfolio
+
Digital Editorial
+
Interactive Web Experiment

Visual harus padat dan ekspresif, tetapi hierarchy tetap jelas.

Setiap section harus punya karakter sendiri tanpa membuat website terasa random.
