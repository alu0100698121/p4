var assert = chai.assert;

suite('Analizador', function() {
    	test('Probando dump', function() {
			dump("assignment.txt");
			window.onload=function(){assert.equal($("#INPUT").val(), "var a = 2;\n");}
		});
   /* test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });*/
});