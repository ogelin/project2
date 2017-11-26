import { expect } from 'chai';
import { ScoreCalculator } from "../classes/score-calculator";
import { Grid } from "../classes/grid";

let scoreCalculator = new ScoreCalculator();
let gridG = new Grid();

    it('Should calculate score', function () {
        let score = scoreCalculator.calculateScore("YOLO");
        expect(score).to.equal(13);
    });

    it('Should return bonus type', function () {
        let bonus = scoreCalculator.returnBonusType(0, 3 , "h", "YOLOO");
        let expected = ["DL", "", "", "", "TW"];
        for (let i = 0; i < expected.length; i++) {
            expect(bonus[i]).to.equal(expected[i]);
        }
    });

    it('Should return score with bonuses', function () {
        gridG.addWord(0, 3, "h", "YOLO");
        let score = scoreCalculator.scoreWithBonus(0, 3 , "h", "YOLO" );
            expect(score).to.equal(23);
    });

    it('Should return score with bonuses test 2', function () {
        gridG.addWord(0, 3, "h", "YOLO");
        let score = scoreCalculator.scoreWithBonus(8, 8 , "h", "EASEL" );
            expect(score).to.equal(7);
    });

    it ('find all new letters', function() {
        gridG.content = [
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "a", "l", "l", "o", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    ];
        let letters = scoreCalculator.extractNewLetters(8, 8, "h", "easel", gridG.content);
        expect(letters.length).to.equal(5);
    });

    it ('find all new letters test 2', function() {
        gridG.content = [
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "a", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "l", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "l", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "e", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "r", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    ];
        let words = scoreCalculator.extractNewLetters(8, 7, "h", "lourd", gridG.content);
        expect(words.length).to.equal(4);
    });

    it ('find uppermost letter', function() {
        gridG.content = [
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "v", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "a", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "a", "l", "l", "o", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "e", "a", "s", "e", "l", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    ];
        let upmost = scoreCalculator.findUppermostLetter(8, 8, gridG.content);
        expect(upmost).to.equal(5);
    });

    it ('find lowermost letter', function() {
        gridG.content = [
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "v", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "a", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "a", "l", "l", "o", "", "", "", ""],
        ["", "", "", "", "", "", "", "l", "e", "a", "s", "e", "l", "", ""],
        ["", "", "", "", "", "", "", "l", "e", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "e", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "r", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    ];
        let lowermost = scoreCalculator.findLowermostLetter(8, 8, gridG.content);
        expect(lowermost).to.equal(9);
    });

    it ('find leftmost letter', function() {
        gridG.content = [
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "v", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "a", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "a", "l", "l", "o", "", "", "", ""],
        ["", "", "", "", "", "", "", "l", "e", "a", "s", "e", "l", "", ""],
        ["", "", "", "", "", "", "", "l", "e", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "e", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "r", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    ];
        let leftmost = scoreCalculator.findLeftmostLetter(8, 8, gridG.content);
        expect(leftmost).to.equal(7);
    });

    it ('find leftmost letter', function() {
        gridG.content = [
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "v", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "a", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "a", "l", "l", "o", "", "", "", ""],
        ["", "", "", "", "", "", "", "l", "e", "a", "s", "e", "l", "", ""],
        ["", "", "", "", "", "", "", "l", "e", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "e", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "r", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    ];
        let rightmost = scoreCalculator.findRightmostLetter(8, 12, gridG.content);
        expect(rightmost).to.equal(12);
    });

    it ('find all orthogonal words', function() {
        gridG.content = [
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "a", "l", "l", "o", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    ];
        let words = scoreCalculator.returnWordsCreated(8, 8, "h", "easel", gridG.content);
        expect(words.length).to.equal(4);
    });

    it ('find final score with all orthogonal words', function() {
        gridG.content = [
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "a", "l", "l", "o", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    ];

        console.log("YOLO: " + scoreCalculator.scoreWithBonus(8, 8, "h", "easel"));
        let finScore = scoreCalculator.totalPoints(8, 8, "h", "easel", gridG.content);
        console.log (finScore);
        expect(finScore).to.equal(13);
    });

    it ('find final score with all orthogonal words test 2', function() {
        gridG.content = [
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "a", "l", "l", "o", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "i", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "m", "e", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "e", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

        ];

        let finScore = scoreCalculator.totalPoints(8, 8, "h", "tome", gridG.content);

        expect(finScore).to.equal(12);
    });

