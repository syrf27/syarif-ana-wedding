export const data = {
    bride: {
        L: {
            id: 1,
            name: 'ACHMAD SYARIEF MUSYAFFA',
            nickname: 'Syarief',
            child: 'Putra pertama',
            father: 'UMAR EDY',
            mother: 'ISWATIN',
            image: './src/assets/images/pria.jpeg'
        },
        P: {
            id: 2,
            name: "SITI NI'MATUL JANAH",
            nickname: 'Ana',
            child: 'Putri pertama',
            father: 'SUDIRMAN',
            mother: 'UMI KHASANAH',
            image: './src/assets/images/wanita.jpeg'
        },

        couple: './src/assets/images/cover.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Maret',
            date: '29',
            day: 'Ahad',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Maret',
            date: '29',
            day: 'Ahad',
            hours: {
                start: '11.00',
                finish: '14.00'
            }
        },
        address: 'Link. Widengan RT/RW 03/13 Kel. Gedongombo-Kec.Semanding-Kab.Tuban'
    },

    link: {
        calendar: 'https://calendar.app.google/oebKVUt8bGeDQwyq5',
        map: 'https://maps.app.goo.gl/2G2MQkRXM3Fig6Cx7',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/kartun_4.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/kartun_3.jpg'
        }
        ,
        {
            id: 3,
            image: './src/assets/images/kartun_2.jpg'
        },
        {
            id: 4,
            image: './src/assets/images/kartun_1.jpg'
        },
        // {
        //     id: 5,
        //     image: './src/assets/images/5.png'
        // }
    ],

    bank: [
        {
            id: 1,
            name: 'Achmad syarief Musyaffa',
            icon: './src/assets/images/bca.png',
            rekening: '8241193152'
        },
        {
            id: 2,
            name: "Siti Ni'amatul Janah",
            icon: './src/assets/images/bri.png',
            rekening: '658001005324508'
        },
    ],

    audio: './src/assets/audio/Bermuara.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxox6RfMf7wN3ck0PoTKA4foInSPX38Ws3oScphEySD68N4L-yP_V4kjqTggVjXTZ7v/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
