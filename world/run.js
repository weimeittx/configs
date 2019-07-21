var npcs = com.hz.main.GameWorld.getNPCList()
for(var npcIndex  in npcs){
	var npc = npcs[npcIndex];
	cmd.alert(npc.getName())
}
