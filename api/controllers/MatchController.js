/**
 * MatchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {

    join: async function(req,res){

        var match = await Match.findOne({
            babyFoot: 1
        });

        if (!match) {
            match = await Match.create({
                babyFoot: 1
            });
            console.log(' matchcontrol')

        }
        console.log('join matchcontrol')
        var five = require("johnny-five");
        var board = new five.Board();

        board.on("ready", function () {


            var sensorA = new five.Sensor("A0");
            var sensorB = new five.Sensor("A5");


            var pointsA = 0;
            var pointsB = 0;
            var isFinished = false;

            // console.log('Le match a commencé !')


            sensorA.on("change", function (value) {
                if (value === 0)
                    checkMatchState('A')
            });
            sensorB.on("change", function (value) {
                if (value === 0)
                    checkMatchState('B')
            });


            ////////////////////////
            function checkMatchState(team) {


                if (isFinished) return

                if (!isFinished) {
                    team === 'A' ? pointsA++ : pointsB++;
                    console.log('A ' + pointsA + ' - B ' + pointsB)

                    Match.update({
                        babyFoot: 1,
                    }).set({
                        redScore: pointsA,
                        blueScore: pointsB
                    }).exec(function(err, updatedModel) {
                        Match.publish([1], {
                            redScore: pointsA,
                            blueScore: pointsB
                        })

                    });

                }

                if (pointsA === 10 || pointsB === 10) {
                    isFinished = true;
                    console.log("L'équipe " + (pointsA === 10 ? 'A' : 'B') + " a gagné !")
                    // SailsSocket.emit('match/stop', {
                    //     babyFoot: 1,
                    //     equipeA: pointsA,
                    //     equipeB: pointsB
                    // })
                }
            }
        });


        return res.ok(match);
    },
    but: async function(req,res){

        var match = await Match.findOne({
            babyFoot: 1
        });

        var updateMatch = await Match.update({
            babyFoot: 1,
        }).set({
            redScore: match.redScore+1
        }).exec(function(err, updatedModel) {

        });

        Match.publish([1])

        console.log('BUT '+ match.redScore)

        return res.ok(match);
    },

};




