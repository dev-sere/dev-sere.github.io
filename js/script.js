  /*------- typewriter script ------- */

		var str = '<header class="height-minor line-minor padding-med"><a href="index.html"> <span class="serg">Sergey</span><span class="io"></span></a><span style="color: #4B96D0;"> Kistryuga</span> </header>',
				 
			i = 0,
			isTag,
			text;

		(function type() {
			text = str.slice(0, ++i);
			if (text === str) return;
			
			document.getElementById('typewriter').innerHTML = text;

			var char = text.slice(-1);
			if( char === '<' ) isTag = true;
			if( char === '>' ) isTag = false;

			if (isTag) return type();
			setTimeout(type, 100);
		}());

 /*------- end: typewriter script ------- */