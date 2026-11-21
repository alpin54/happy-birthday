// ===== SEMUA KONTEN DIEDIT DI SINI =====
export interface Photo {
	src: string;
	date: string;
	title: string;
	caption: string;
}
export interface Reason {
	icon: "smile" | "heart" | "sparkles" | "gift" | "sun" | "star";
	title: string;
	text: string;
}

export const CFG = {
	herName: "Raya Natasya Maratussholihah",
	fromName: "Alpin",
	birthday: "23 November 2026",
	// Taruh file di /public/audio lalu isi, mis. "/audio/song.mp3". Kosong = tombol musik hanya menampilkan pengingat.
	music: "/audio/song.mp3",
	loadingMessages: [
		"Menyiapkan semesta kecil untukmu…",
		"Mengumpulkan semua kenangan…",
		"Hampir siap, sayang ❤️",
	],
	birthdayMessage:
		"Terima kasih sudah lahir ke dunia ini, dan terima kasih sudah memilih berjalan bersamaku. Hari ini bukan hanya tentang bertambahnya usiamu — tapi tentang betapa dunia jadi lebih hangat karena ada kamu.",
	wishMessage: "May every little wish in your heart find its way to you.",
	// Taruh foto di /public/photos lalu isi src, mis. "/photos/1.jpg". Kosong = placeholder.
	photos: [
		{
			src: "/photos/meet.jpeg",
			date: "Hari pertama",
			title: "The Day We First Met",
			caption:
				"Dari sekian banyak pertemuan, hari itu menjadi awal dari cerita terindah yang tak pernah aku bayangkan.",
		},
		{
			src: "/photos/date.jpeg",
			date: "Kencan pertama",
			title: "The First Date",
			caption:
				"Mungkin terlihat sederhana, tapi bagiku hari itu istimewa. Karena untuk pertama kalinya, aku punya cerita berdua denganmu.",
		},
		{
			src: "/photos/formal.jpeg",
			date: "Momen istimewa",
			title: "The Formal Date",
			caption:
				"Di antara banyak hal indah yang pernah kita lalui, momen ini menjadi salah satu kenangan yang ingin selalu aku simpan.",
		},
		{
			src: "/photos/smile.jpeg",
			date: "Suatu sore",
			title: "My Favorite Smile",
			caption:
				"Dari semua hal yang bisa membuatku bahagia, melihat senyummu selalu menjadi salah satu favoritku.",
		},
		{
			src: "/photos/photobooth.jpeg",
			date: "Perjalanan kita",
			title: "Every Picture Has a Story",
			caption:
				"Setiap foto punya ceritanya sendiri, dan dari semua cerita itu, bagian paling indahnya adalah karena ada kamu di dalamnya.",
		},
		{
			src: "/photos/wisuda.jpeg",
			date: "Hari wisuda",
			title: "Little Moments, Big Memories",
			caption:
				"Melihatmu sampai di titik ini membuatku bangga. Semoga aku bisa terus ada di setiap langkah dan pencapaianmu berikutnya.",
		},
	] as Photo[],
	letter: `Untukmu, sayangku,

Aku tidak pandai merangkai kata seindah yang kamu pantas dapatkan. Tapi hari ini aku ingin kamu tahu: kamu adalah bagian terbaik dari hari-hariku.

Terima kasih untuk sabarmu, tawamu, dan caramu membuat hal biasa jadi istimewa. Bersamamu, aku belajar bahwa bahagia itu sederhana — cukup ada kamu di sampingku.

I hope this year gives you everything you’ve ever dreamed of.

With all my love,`,
	reasons: [
		{
			icon: "smile",
			title: "Your Beautiful Smile",
			text: "Satu senyummu cukup untuk membuat duniaku berhenti sejenak.",
		},
		{
			icon: "heart",
			title: "The Way You Make Me Happy",
			text: "Bersamamu, bahagia terasa begitu mudah.",
		},
		{
			icon: "sparkles",
			title: "Your Kind Heart",
			text: "Kamu lembut pada dunia, dan itu membuatku jatuh cinta lagi.",
		},
		{
			icon: "gift",
			title: "The Little Things You Do",
			text: "Perhatian kecilmu adalah hal-hal yang paling kuingat.",
		},
		{
			icon: "sun",
			title: "You Make Ordinary Days Special",
			text: "Hari biasa jadi luar biasa karena ada kamu.",
		},
		{
			icon: "star",
			title: "Simply Because You’re You",
			text: "Tanpa alasan lain. Karena kamu adalah kamu.",
		},
	] as Reason[],
	future: [
		"More adventures",
		"More memories",
		"More laughter",
		"More sunsets together",
		"More birthdays by your side",
	],
	finalMessage: `Selamat ulang tahun, Sayang.

Terima kasih telah menjadi bagian dari hidupku.
Aku tidak tahu apa yang akan terjadi esok hari,
namun satu hal yang aku tahu…

Aku ingin terus memilihmu,
di setiap hari, di sepanjang hayat.

I love you. Always. ❤️`,
	signature: "Made with all my love, just for you.",
};
