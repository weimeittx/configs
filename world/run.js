var f = false;
while (true) {
    java.lang.Thread.sleep(1000);
    if (f) {
        com.hz.main.GameWorld.doJumpMap(900,2,36);
    } else {
        com.hz.main.GameWorld.doJumpMap(901,27,3);
    }
    f = !f;
}
