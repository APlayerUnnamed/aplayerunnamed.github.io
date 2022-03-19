// Variables
const stylesheet = document.documentElement.style; // Stylesheet


// Functions

function wait( milisec )
{
	return new Promise( resolve =>
	{
		setTimeout( () =>
		{
			resolve( '' )
		}, milisec );
	} )
}
const usingInternetExplorer = () =>
{
	return ( navigator.userAgent.indexOf( `MSIE ` ) > -1 || navigator.userAgent.indexOf( `Trident/` ) > -1 );
};
let address = new URL( window.location );
// Get searchParameters property of the URL object
let queryParameters = address.searchParams;
// Retrieve specific query parameters
let ignore = queryParameters.get( "ignore" );
if ( !ignore )
{
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) )
	{
		console.log( "Seems to be on Mobile - Redirecting" )
		document.location.replace( "https://aplayerunnamed.github.io/pages/mobile" )
	}
	else
	{
		console.log( "Seems to be on PC" )
	}

	if ( !usingInternetExplorer )
	{
		document.location.replace( "https://aplayerunnamed.github.io/pages/mobile" )
	}
}




function onError( error, fatal )
{
	console.group( 'I\'m sorry, but a unknown error occurred!' );
	if ( !fatal )
	{
		console.info( 'Error is NON FATAL' );
	}
	else
	{
		console.warn( 'Error is fatal' );
	}
	console.error( 'Error:\n===\n' + error + '\n===' )
	if ( fatal )
	{
		const err = "I'm sorry but a unknown error occurred! - See the console for details";
		stylesheet.backgroundColor = '#151515';
		stylesheet.color = '#FEFEFE';
		stylesheet.fontFamily = 'Courier New';
		stylesheet.fontSize = '200%'
		document.getElementById( 'ErrorID' ).replaceWith( err );
	}
}



function toggle( ID )
{
	var element = document.getElementById( ID );
	if ( element.style.display === "none" )
	{
		element.style.display = "block";
	}
	else
	{
		element.style.display = "none";
	}
}

function preloadImage( url, callback )
{
	var img = new Image();
	img.src = url;
	img.onload = callback;
}

// Sleep


async function openUp( url, title = url )
{
	try
	{
		if ( url.startsWith( "mailto" ) )
		{
			document.title = "Opening Email Client";
			document.location.replace( url )
			wait( 1300 )
			document.title = "APlayerUnnamed";



		}
		else
		{
			document.title = "Opening Link - " + url;
			window.open( `https://aplayerunnamed.github.io/redirect/index.html?redirectLocation=${url}&linkTitle=${title}`, "Link", "width=960,height=720" );
			document.title = "APlayerUnnamed";
		}
	}
	catch ( e )
	{
		onError( e, true )
	}
}

// Loader
try
{
	toggle( 'content_id' )
	preloadImage( 'mail.png', console.log( 'Loaded Email (Icon)' ) );
	preloadImage( 'discordred.png', console.log( 'Loaded Discord Red (Icon)' ) );
	preloadImage( 'discordblue.png', console.log( 'Loaded Discord Blue (Icon)' ) );
	preloadImage( 'github.png', console.log( 'Loaded Github (Icon)' ) );
	preloadImage( 'back.png', console.log( 'Loaded Background (Background Image)' ) )
	toggle( 'content_id' )
}
catch ( e )
{
	onError( e, true )
}

// After load
console.log( 'Assets loaded...' )