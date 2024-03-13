function checkForShip (player, coordinates) {
    let shipPresent, ship 

    for (let i = 0; i < player.ships.length; i++) {
        ship = player.ships[i] 

        shipPresent = ship.locations.filter(function (actualCoordinate) {
            return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]) 
        })[0]

        if (shipPresent) {
            return ship
        }
    }

    return false 
}

function damageShip (ship, coordinates) {
    ship.damage.push(coordinates)
}

function fire (player, coordinate) { 
    const ship = checkForShip (player, coordinate) 
    if (ship) {
        damageShip (ship, coordinate)
    }
}

function validateLocation (player, coordinate) {
    let x = coordinate[0] 
    let y = coordinate[1] 

    const spaceAvailable = !checkForShip(player, coordinate) 

    if ((x <= 9 && x >= 0) && (y <=9 && y >= 0)) {
        return spaceAvailable 
    }else {
        return false 
    }
}

function placeShip () {
    return "Place ship"
}

function getRandomCoordinates () {
    let x = Math.floor(Math.random() * 9) 
    let y = Math.floor(Math.random() * 9) 
    return [x, y] 
}

function getRandomDirection () {
    return Math.random() > 0.5 ? "horizontal" : "vertical"  
}

//fire(player, getRandomCoordinates())
//placeShip(computerPlayer, computerPlayer.ship[0], getRandomCoordinates(), getRandomDirection())

// function computerFire (player) {}
//function computerPlaceShip (player, ship) {}

function checkGameStatus () {

}

export { 
    checkForShip, 
    damageShip, 
    fire, 
    validateLocation, 
    placeShip
 }