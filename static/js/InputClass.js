function InputClass() {
    var unicode = new Unicode();
    var operation = new Operation();

    this.takeInput = function (val) {
        var temp = val;

        for (var i = 0; i < temp.length; i++) {

            // check characters
            var character = unicode.checkCharacter(temp[i]);

            // check spacebar
            if (temp[i] == "\u0020") {
                temp[i] = "\u0020";
                unicode.spacePressed();
                word = "";
                continue;
            }

            // check new line (line feed)
            if (temp[i] == "\u000A") {
                temp[i] = "\u000A";
                unicode.newLine();
                word = "";
                continue;
            }

            if (!character) {
                if (i == 0) {
                    unicode.initialize(temp[i]);
                }

                unicode.unicoder(temp[i]);
            }
        }

        unicode.resetflags();
        if (temp.length == 0)
            operation.output("");
    }
}