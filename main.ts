function StartBootloader () {
    closeallMenus()
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Start Main Program", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false),
    miniMenu.createMenuItem("Start authorized OS", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false),
    miniMenu.createMenuItem("OS OPTIONS")
    )
    miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
        miniMenu.close(myMenu)
        if (selectedIndex == 0) {
            console.log("RUN | STARTOS")
            StartOS()
        } else if (selectedIndex == 1) {
            console.log("RUN | AUTH OS")
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffff5ffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ff2222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ff2222552222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ff2225555222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ff2225555222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ff2222552222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ff2222552222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ff2222552222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ff2222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ff2222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ff22222222222222fffffff22222222222222fffffff2222222222222fffffffffffffffffffffffffffffffffffffffffff
                ff2fffffffffffffffffffffffffffffffff2fffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffff
                ff2fffffffffffffffffffffffffffffffff2fffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffff
                ff2fffffffffffffffffffffffffffffffff2ffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffff
                ff2fffffffffffffffffffffffffffffffff2fffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffff
                ff2fffffffffffffffffffffffffffffffff2fffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffff
                ff2fffffffffffffffffffffffffffffffff2ffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff
                ff2fffffffffffffffffffffffffffffffff2fffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffff
                ff2fffffffffffffffffffffffffffffffff2fffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffff
                ff22222222222222fffffff22222222222222ffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffff2fffffff2ffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffff2fffffff2ffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffff2fffffff2fffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffff2fffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffff2fffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffff2fffffff2fffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffff2fffffff2ffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffff2fffffff2ffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ff22222222222222fffffff22222222222222ffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            while (blockSettings.readNumber("authoverride") != 1) {
                console.log("Override not found")
                pause(1000)
            }
            scene.setBackgroundImage(img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `)
            authOS()
        } else if (selectedIndex == 2) {
            console.log("RUN | OSOPTIONS")
            OsOptions()
        }
    })
}
controller.combos.attachCombo("" + controller.combos.idToString(controller.combos.ID.right) + controller.combos.idToString(controller.combos.ID.left) + controller.combos.idToString(controller.combos.ID.left) + controller.combos.idToString(controller.combos.ID.right) + controller.combos.idToString(controller.combos.ID.left) + controller.combos.idToString(controller.combos.ID.right), function () {
    game.showLongText("Unlocking connected device to P0", DialogLayout.Bottom)
    pins.P0.analogWrite(5161)
})
controller.combos.attachCombo("" + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.B), function () {
    if (blockSettings.readNumber("authoverride") == 1) {
        blockSettings.writeNumber("authoverride", 0)
    } else {
        blockSettings.writeNumber("authoverride", 1)
    }
})
function OsOptions () {
    closeallMenus()
    OSOptionsMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Enable Developer Mode"),
    miniMenu.createMenuItem("Disable Developer Mode")
    )
    miniMenu.onButtonPressed(OSOptionsMenu, miniMenu.Button.A, function (selection, selectedIndex) {
        miniMenu.close(OSOptionsMenu)
        if (selectedIndex == 0) {
            blockSettings.writeNumber("developer", 1)
            console.log("SYSTEM | DEVMODE ENABLED")
            StartBootloader()
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        }
        if (selectedIndex == 1) {
            blockSettings.writeNumber("developer", 0)
            console.log("SYSTEM | DEVMODE DISABLED")
            StartBootloader()
            music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
        }
    })
}
function unlockedMenu () {
    myMenu3 = miniMenu.createMenu(
    miniMenu.createMenuItem("Lock device", img`
        f f f f f f f f f f f f f f f f 
        f f f f f f 5 5 5 5 f f f f f f 
        f f f f f 5 f f f f 5 f f f f f 
        f f f f 5 f f f f f f 5 f f f f 
        f f f f 5 f f f f f f 5 f f f f 
        f f f f 5 f f f f f f 5 f f f f 
        f f f 2 2 2 2 2 2 2 2 2 2 f f f 
        f f f 2 2 2 2 5 5 2 2 2 2 f f f 
        f f f 2 2 2 5 5 5 5 2 2 2 f f f 
        f f f 2 2 2 5 5 5 5 2 2 2 f f f 
        f f f 2 2 2 2 5 5 2 2 2 2 f f f 
        f f f 2 2 2 2 5 5 2 2 2 2 f f f 
        f f f 2 2 2 2 5 5 2 2 2 2 f f f 
        f f f 2 2 2 2 2 2 2 2 2 2 f f f 
        f f f 2 2 2 2 2 2 2 2 2 2 f f f 
        f f f f f f f f f f f f f f f f 
        `),
    miniMenu.createMenuItem("Unlock other devices", assets.image`myImage3`, true),
    miniMenu.createMenuItem("Authorize action")
    )
    miniMenu.setFrame(myMenu3, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 . 2 . 2 . 2 . 2 . 2 . 2 2 
        2 . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . 2 
        2 2 . 2 . 2 . 2 . 2 . 2 . 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    miniMenu.setMenuStyleProperty(myMenu3, miniMenu.MenuStyleProperty.DisabledItemsSelectable, 1)
    miniMenu.setMenuStyleProperty(myMenu3, miniMenu.MenuStyleProperty.Width, 150)
    miniMenu.onButtonPressed(myMenu3, miniMenu.Button.A, function (selection, selectedIndex) {
        miniMenu.close(myMenu3)
        if (selectedIndex == 0) {
            blockSettings.writeNumber("unlocked", 0)
            StartBootloader()
        } else if (selectedIndex == 1) {
            pins.P0.analogWrite(5161)
        } else if (selectedIndex == 2) {
        	
        }
    })
}
function closeallMenus () {
    if (myMenu) {
        miniMenu.close(myMenu)
    }
    if (myMenu2) {
        miniMenu.close(myMenu2)
    }
    if (OSOptionsMenu) {
        miniMenu.close(OSOptionsMenu)
    }
}
function unlockDevice () {
    closeallMenus()
    if (blockSettings.readNumber("unlocked") == 1) {
        game.showLongText("Device already unlocked.", DialogLayout.Full)
        unlockedMenu()
    } else {
        blockSettings.writeNumber("unlocked", 1)
        game.showLongText("Unlocked Device.", DialogLayout.Full)
        unlockedMenu()
    }
}
function StartOS () {
    closeallMenus()
    myMenu2 = miniMenu.createMenu(
    miniMenu.createMenuItem("Apps", img`
        . . . . . . . . . . . . . . . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 f f f f f f f 7 7 7 7 . 
        . 7 7 7 f f f f f f f f f 7 7 7 . 
        . 7 7 f f f f f f f f f f f 7 7 . 
        . 7 7 f f f f f f f f f f f 7 7 . 
        . 7 7 f f f f f f f f f f f 7 7 . 
        . 7 7 f f f f f f f f f f f 7 7 . 
        . 7 7 f f f f f f f f f f f 7 7 . 
        . 7 7 f f f f f f f f f f f 7 7 . 
        . 7 7 f f f f f f f f f f f 7 7 . 
        . 7 7 7 f f f f f f f f f 7 7 7 . 
        . 7 7 7 7 f f f f f f f 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Restart", assets.image`myImage0`),
    miniMenu.createMenuItem("Load into DEVMODE", assets.image`myImage1`, blockSettings.readNumber("developer") == 0)
    )
    miniMenu.onButtonPressed(myMenu2, miniMenu.Button.A, function (selection, selectedIndex) {
        miniMenu.close(myMenu2)
        if (selectedIndex == 0) {
            console.log("RUN | APPS")
        } else if (selectedIndex == 1) {
            console.log("SYSTEM | RESTART")
            StartBootloader()
        } else if (selectedIndex == 2) {
            StartBootloader()
        }
    })
}
controller.combos.attachCombo("" + controller.combos.idToString(controller.combos.ID.B) + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.down), function () {
    closeallMenus()
    if (game.askForNumber("Please enter your unlock code:", 6) == 161161) {
        unlockDevice()
    } else {
        game.showLongText("Device unlock code incorrect.", DialogLayout.Full)
    }
})
function authOS () {
    scene.setBackgroundColor(8)
    console.log("AUTHORIZATION GIVEN")
    console.log("AUTH OS V.1.0.0")
    console.log("PRESS > < < > < > FOR UNLOCKING OTHER DEVICES")
}
let myMenu2: Sprite = null
let myMenu3: Sprite = null
let OSOptionsMenu: Sprite = null
let myMenu: Sprite = null
StartBootloader()
blockSettings.writeNumber("unlocked", 0)
blockSettings.writeNumber("developer", 0)
blockSettings.writeNumber("authoverride", 0)
forever(function () {
    if (pins.P0.analogRead() == 5161) {
        unlockDevice()
        pins.P1.analogWrite(-1)
    } else if (pins.P0.analogRead() != 5161) {
        pins.P1.analogWrite(-12)
    } else if (blockSettings.readNumber("unlocked") == 0 && pins.P0.analogRead() != 8517) {
        blockSettings.writeNumber("authoverride", 1)
    }
})
