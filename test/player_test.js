import { expect } from "chai";
import { validateLocation } from "../game-logic/ship_method.js";

describe ("PLAYER METHODS", function () {

    describe ("validateLocations", function () {
        let player; 

        beforeEach(function () {
            player = {
                ships: [ 
                    { 
                        locations: [[9,9]]
                    }
                ]
            }
        })

        it ("should confirm valid for unoccupied locations in range", function () {
            let location = [0,0] 
            let actual = vaidateLocation(player, location) 

            expect (actual).to.be.ok
        })

        it ("should confirm INvalid for occupied locations in range", function () {
            let location = [9,9] 
            let actual = vaidateLocation(player, location)  

            expect (actual).to.be.false 
        })

        it ("should confirm INvalid for UNoccupied locations OUT of range", function () {
            let locationHigh = [10, 10] 
            let locationLow = [-1, -1] 
 
            expect(vaidateLocation( player, locationHigh)).to.be.false 
            expect(validateLocation(player, locationLow)).to.be.false 
        })
    })

    describe("validateLocations", function() {
        let player; 

        beforeEach(function () {
            player = {
                ships: [
                    {
                        locations:[[0,0]]
                    }
                ]
            }
        })

        it ("should correctly report a list of unoccupied locations is valid", function () {
            let locations = [[1,1], [1,2], [1,3], [1,4]] 
            expect (validateLocation(player, locations)).to.be.ok 
        })

        it ("should correctly report a problem if any location in the list is invalid", function () {
            let locations = [[1,1], [1,2], [1,3], [10,10]]
            expect ( validateLocation(player, locations)).to.be.false 

            locations = [[1,1], [1,2], [1,3], [0,0]]
            expect (validateLocation(player, locations))
        })
    })

    describe ("placeShip", function () {
        
        let player; 

        beforeEach (function () {
            player = {
                ships: [
                    {
                        size:1, 
                        locations:[]
                    }, {
                        size:2, 
                        locations:[[1,0], [1,1]]
                    }
                ]
            }
        })

        it("should update a ship with a valid starting location", function () {
            let ship = player.ships[0] 
            let coordinate = [0,1] 

            placeShip(player, ship, coordinate, "horizontal") 
            const actual = ship.locations 

            expect(actual).to.be.ok 
            expect(actual).to.have.length 
            expect(actual[0]).to.deep.equal([0,1])
        })

        it ("should throw an error if no direction is specified", function () {
            let ship = player.ships[0] 
            let coordinates = [0,1]

            let handler = function () { placeShip(player, ship, coordinates) }
            expect(handler).to.throw(Error)
            expect(handler).to.throw("Enter a direction! I need that to do the math!")
        })

    })

    // describe("COMPUTER PLAYER", function() {
    //     describe("computerFire", function () {
    //         let player;

    //         beforeEach(function () {
    //             player = {
    //                 ships: [ 
    //                     {
    //                         locations:[[9,9]]
    //                     }
    //                 ]
    //             }
    //         })

    //         it ("should aim at a random location", function () {
    //             let ship = player.ships[0]

    //             computerFire()
    //         })
    //     })
    // })
})