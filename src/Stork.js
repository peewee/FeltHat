// import { writable } from 'svelte/store'
import { readable, get } from 'svelte/store'

/*
let Albums = []

fetch('http://s3.amazonaws.com/negrone/album.txt')
	.then(response => response.json())
	.then(json => {
		json.forEach( function( itm ) 
			{ 
				Albums.push( itm.album )
				console.dir( itm )
				///albums.subscribe( itm )
			}
		)
		console.dir( Albums )
	})

export const albums = writable(Albums)
*/

export const count = readable( 0, set => {
	setInterval(() => {
		set( get( count ) + 1 )
	}, 1000)
})

let Gallery = ['fookit']

export const albums = readable( [], set => {
	fetch('http://s3.amazonaws.com/negrone/album.txt')
		.then(response => response.json())
		.then(json => {
			//console.log(`\ngallery:`)
			//console.dir( json )
			set(json)
		})
})	

















/***
export const albums = readable( [], set => {
	set( Gallery )
})
***/

/*()
const unsubscribe = albums.subscribe( value => {
	console.log(value);
})
*/

// albums.set('fuckit')