const path = require('path');

exports.createPages = async ({ graphql, actions }:any) => {
    const {data} = await graphql(`
        query Products {
            allMensClothingJson {
                nodes {
                    id
                }
            }
            allWomensClothingJson {
                nodes {
                    id
                }
            }
        }
    `)
    const dataArray = [...data.allMensClothingJson.nodes, ...data.allWomensClothingJson.nodes]
    dataArray.forEach(node => {
        const {id} = node;
        actions.createPage({
            path: `/${id}`,
            component: path.resolve('./src/templates/singleProductPage.tsx'),
            context: {id}
        })
    })
}