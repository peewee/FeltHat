<script>
	console.log(`hullo mBar`)
</script>







<style> 
    #mbar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
    #mbar div {
	    list-style-type: none;
	    margin: 0;
	    padding: 0;
	    overflow: hidden;
	    position:relative;
	    z-index: 3;
		background-color: rgba( 230, 230, 230, 0.8 )
    }
    #mbar div a {
	    float: left;
	    font-family: Lato, Helvetica, sans-serif;
		font-size: .75em;
		font-weight: 700;
	    display: block;
		opacity: .85;	
	    color: rgb(88, 88, 88);
		background-color: transparent;
	    text-align: center;
	    padding: 6px 12px;
	    text-decoration: none;
    }
</style> 


<span id="mbar">
	<div>
      	<a href='/'>Home</a>
	  	<a href='/'>Chindwin</a>
	  	<a href='/'>PNG</a>
		<a href='/'>Bhutan</a>
    </div>
</span>