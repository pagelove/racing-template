// HTML track definitions are authoritative; numeric simulation is a derived runtime.
export function parseTracks(doc){const tracks=[...doc.querySelectorAll('article[itemtype="urn:Pagelove:RaceTrack:1"]')].map(el=>{const get=key=>el.querySelector('[itemprop="'+key+'"]').textContent;const track={id:el.id,name:get('name'),rx:Number(get('radiusX')),ry:Number(get('radiusY')),laps:Number(get('laps')),speed:Number(get('maxSpeed')),turnRadius:Number(get('turnRadius')),rules:get('rules')};if(!/^track-[a-z-]+$/.test(track.id)||![track.rx,track.ry,track.laps,track.speed,track.turnRadius].every(Number.isFinite)||track.rx<80||track.rx>210||track.ry<80||track.ry>210||!Number.isInteger(track.laps)||track.laps<1||track.laps>5||track.speed<60||track.speed>200||track.turnRadius<80||track.turnRadius>250||track.rules!=='race-2')throw Error('Unsupported track definition');return track;});if(!tracks.length||new Set(tracks.map(t=>t.id)).size!==tracks.length)throw Error('Missing or duplicate track identities');return tracks;}
export function initial(track){return{x:250,y:250-track.ry,heading:0,speed:0,seconds:0,lap:0,next:1,sector:0,finished:false};}
export function advance(state,track,input,dt){
 if(state.finished)return {...state};dt=Math.min(.025,Math.max(0,dt));const s={...state};
 const radius=Math.hypot((s.x-250)/track.rx,(s.y-250)/track.ry),offroad=Math.abs(radius-1)>.19;
 s.speed=Math.max(-35,Math.min(track.speed,s.speed+(input.accelerate?95:input.reverse?-70:-s.speed*.8)*dt-(input.brake?Math.sign(s.speed)*200*dt:0)));
 if(offroad)s.speed*=Math.exp(-2.8*dt);
 s.heading+=(Number(!!input.right)-Number(!!input.left))*s.speed/track.turnRadius*dt;
 s.x=Math.max(12,Math.min(488,s.x+Math.cos(s.heading)*s.speed*dt));s.y=Math.max(12,Math.min(488,s.y+Math.sin(s.heading)*s.speed*dt));s.seconds+=dt;
 const angle=(Math.atan2((s.y-250)/track.ry,(s.x-250)/track.rx)+Math.PI/2+2*Math.PI)%(2*Math.PI),sector=Math.floor(angle/(Math.PI/2));
 if(!offroad&&sector!==s.sector&&sector===s.next){s.next=(s.next+1)%4;if(sector===0){s.lap++;if(s.lap>=track.laps)s.finished=true;}}
 s.sector=sector;return s;
}
