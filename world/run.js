var npcs = com.hz.main.GameWorld.getNPCList();
for(var npcIndex  in npcs){
	var npc = npcs[npcIndex];
	cmd.alert("|"+npc.getName()+"|")
	if(npc.getName().equals("丛林守卫")){
		cmd.alert(java.lang.String.valueOf(npc.missions));
		cmd.alert(java.lang.String.valueOf(npc.missions.size()));
		if(npc.missions.size() > 0){
			for(var mIndex in npc.missions){
				var m = npc.missions[mIndex];
				
				cmd.alert(m.name);
				cmd.alert(m.getNameInfo());
			}
		}
	}
}
