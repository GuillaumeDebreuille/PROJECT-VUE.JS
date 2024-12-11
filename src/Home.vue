<template>
    <ModaleCV v-bind:revele="revele" v-bind:toggleModale="toggleModale"/>
    <h1>Mes projets ss</h1>
        <div class="containers">

            <div class="container">
                <p>Créer un CV</p>
                <button @click="toggleModale" class="modaleCV">
                    <img src="./assets/CV.png" alt="CV" title="CV">
                </button>
            </div>
            
            <div class="container">
                <p>Cahier des charges</p>
                <button>
               
                </button>
            </div>

            <div class="container">
                <p>Dynamiser un éspace commentaires </p>
                <button>
                
                </button>
            </div>
        </div>
   
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita assumenda consequatur laboriosam accusamus tempora sapiente, quam nam esse odit, ea ratione beatae harum possimus, at nulla nobis magnam. Laudantium, ullam.
        Sint non voluptatum beatae sit quia sequi suscipit, exercitationem magnam vero impedit, ipsum nihil libero adipisci omnis deserunt obcaecati provident illum esse corporis in minima dolor assumenda soluta. Quibusdam, ea.
        Architecto consequatur fuga ut eligendi quae maxime nihil natus, voluptas fugiat eum facere quaerat eius id odio doloremque error vel recusandae rem at voluptate soluta repellat. Officiis distinctio dolor ex.
        Ipsa corporis obcaecati voluptatem voluptatibus optio animi numquam illo consequatur adipisci, praesentium repellendus at sapiente reiciendis suscipit quod eos possimus iste impedit recusandae distinctio itaque! Sed blanditiis quos architecto. Voluptatem?
        Earum molestiae eum dolorem quas aut dolore laudantium ipsa eveniet iusto? A, ipsum deleniti. Id repudiandae accusantium provident nihil! Architecto nihil atque dolores libero iste facere sunt odio quibusdam error.
        Odio nobis inventore molestiae distinctio non animi vel illo optio voluptatem repudiandae cum, voluptates temporibus ipsam eveniet corrupti laudantium amet tenetur blanditiis nostrum ex voluptatibus? Labore accusamus ab soluta minus.
        Adipisci unde aliquam suscipit, quaerat facere reiciendis aspernatur veniam molestias delectus quia. Architecto vero sint officiis commodi modi voluptatem doloribus, atque laborum qui non ex molestiae fugiat. Dolorem, facere ducimus.
        Facere odio odit sed quas illum, officia esse dicta laboriosam quam a! Quos quam sit, non, alias similique quibusdam laborum consequatur hic commodi dicta officia, illum minima ad expedita itaque!
        Quo reiciendis neque quae atque, vero suscipit voluptatem quia deserunt, sunt voluptatibus optio saepe, nesciunt exercitationem! Voluptatibus iste nam delectus nisi, molestiae, quae quam officia praesentium ducimus non, laborum quisquam!
        Itaque, doloribus debitis. Voluptate sapiente laboriosam esse, aspernatur perferendis natus pariatur inventore totam hic magni aperiam, eveniet nobis accusamus excepturi? Praesentium est, odio quaerat voluptatem incidunt rem obcaecati nemo. Voluptates.
        Rem animi optio distinctio deleniti numquam magni molestiae? Delectus ea assumenda blanditiis nobis eius ab, nemo porro omnis est. Praesentium optio voluptatibus qui rerum. Voluptatem iusto optio cum amet non!
        Omnis aperiam distinctio fugiat possimus optio nesciunt numquam illum doloremque molestiae suscipit neque tempore, corporis alias provident voluptatem quod praesentium adipisci! Doloremque, nulla beatae aperiam nesciunt unde aut optio impedit.
        Eius, cupiditate corrupti. Possimus porro quo cum deserunt temporibus officia, tenetur eaque atque sed saepe nulla nemo ullam eos! Obcaecati pariatur nobis vitae ipsam ad libero quis impedit sed harum!
        Illum maiores ipsum eligendi omnis atque, provident voluptate facilis suscipit fuga alias optio, mollitia quas neque, fugit quibusdam sequi? Iure ullam quam facere voluptate atque sint, esse sunt totam soluta!
        Qui explicabo dolores earum vero culpa aliquam officiis incidunt quia quam iusto distinctio omnis hic nobis animi, quod dolorum perferendis nostrum nam perspiciatis mollitia pariatur ipsam suscipit ratione? Alias, odio.
        Debitis, provident iure esse quibusdam iste aliquam, cum quia maiores molestiae eius vel labore repudiandae sunt perspiciatis sequi repellat. In at, iure nobis dolor magni explicabo consequatur temporibus quaerat praesentium.
        Nostrum est dolorum ratione molestias sint similique officia perferendis eos suscipit eum, voluptates accusamus quae magni ab fugiat quasi modi, praesentium assumenda, non provident? Ipsam optio suscipit consequuntur voluptatibus et.
        Eveniet, minima laudantium! Voluptates, quibusdam temporibus. At, nihil illo dolore, voluptatem quaerat laboriosam libero sequi atque deleniti obcaecati officiis doloribus dolorem. Voluptatum ut nulla quasi ipsa consequatur tempore asperiores enim.
        Voluptatibus corporis a labore. Amet numquam fuga minus ipsum quia neque id perspiciatis iusto quisquam? Cum, consectetur dignissimos molestiae, voluptate quidem corporis necessitatibus nobis ipsa minima atque asperiores eos rem.
        Ea iure, ducimus, necessitatibus non error quidem saepe esse atque autem in porro doloribus veritatis unde dolor earum ratione, maxime voluptatum! Necessitatibus non vitae blanditiis fuga quidem impedit, debitis et!
    </div>
    
    
</template>



<script>
    import ModaleCV from './ModaleCV.vue';
    export default {
        name: 'Home',
        data() {
            return {
                revele: false
            }
        },
        components: {
            ModaleCV
        },
        methods: {
            toggleModale: function() {
                this.revele = !this.revele
            }
        },
    }
</script>



<style scoped>
    .containers {
        display: flex;
        padding: 5px;
        
    }
    .container {
        background-color: rgb(218, 144, 49);
        gap: 5px;
        width: 33%;
        padding: 5px;
        margin: 5px;

        display: flex;
        flex-direction: column;
        text-align: center;
        color: white;
    }
    .modaleCV img {
        height: 200px;
        width: auto;
    }
    .modaleCV img:hover {
        cursor: pointer;
        opacity: 80%;
    }
    .modaleCV img:active {
        opacity: 60%;
    }
    .modaleCV {
        background-color: rgb(218, 144, 49);
        border: none;
    }

   
</style>

