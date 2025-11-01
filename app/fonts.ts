import localFont from "next/font/local"

export const herbert = localFont({
	src: "./fonts/ExpandedHerbertarian.ttf",
})

export const regularIosevka = localFont({
	src: [{
		path: "./fonts/IosevkaNerdFontMono-Regular.ttf",
		style: "normal"
	},
	{
		path: "./fonts/IosevkaNerdFontMono-Italic.ttf",
		style: "italic"
	}]
})

