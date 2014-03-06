var assert = chai.assert;

suite('Analizador', function() {
    	test('Probando dump', function() {
			dump("assignment.txt");
			window.onload=function(){assert.equal($("#INPUT").val(), "var a = 2;\n");}
		});
		test('Probando parse', function() {
			dump("assignment.txt");
			window.onload=function(){
				main();
				assert.deepEqual($("#OUTPUT").html(),'{\n\t"value": "=",\n\t"arity": "binary",\n\t"first": {\n\t\t"value": "a",\n\t\t"arity": "name"\n\t},\n\t"second": {\n\t"value": 2,\n\t"arity": "literal"\n\t}\n}');
			};		
		});
		test('Probando error', function() {
			window.onload=function() {
				$("#INPUT").val("esto es un error");
				main();
				assert.match($("#OUTPUT").innerHTML, /(?:Type)?Error/i);
			}
		});
});