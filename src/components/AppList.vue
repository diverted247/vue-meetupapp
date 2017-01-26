<template>
    <div class="pure-u-1-2" :style="{ 'height': window.innerHeight - 119 +'px'}" style="overflow:auto">
        <ul>
            <li class="pointer" @click="selectedMember=member" v-for="member in memberFiltered">
                <span v-if="selectedMember==member"><strong>{{member.name}}</strong></span>
                <span v-else>{{member.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import model from '../modules/model'

export default {
    data(){
        return model;
    },
    computed:{
        window(){ return window },
        memberFiltered(){
            if( this.members ){
                var direction = this.direction;
                if( this.sortBy == 0 ){
                    return this.members.sort( function( a , b ){
                        var aname = a.name.split(" ")[0];
                        var bname = b.name.split(" ")[0];
                        if( aname < bname ){
                            if( direction ){
                                return -1;
                            }else{
                                return 1;
                            }
                        }
                        if( aname > bname ){
                            if( direction ){
                                return 1;
                            }else{
                                return -1;
                            }
                        }
                        return 0;
                    })
                }else if( this.sortBy == 1 ){
                    return this.members.sort( function( a , b ){
                        var aname = a.name.split(" ");
                        aname = aname[ aname.length - 1 ];
                        var bname = b.name.split(" ");
                        bname = bname[ bname.length - 1 ];
                        if( aname < bname ){
                            if( direction ){
                                return -1;
                            }else{
                                return 1;
                            }
                        }
                        if( aname > bname ){
                            if( direction ){
                                return 1;
                            }else{
                                return -1;
                            }
                        }
                        return 0;
                    })
                }
            }else{
                return [];
            }
        }
    }
}
</script>

<style scoped>
div{
    padding:1em;
    background-color: #999;
}
</style> 