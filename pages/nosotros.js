import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout
            pagina='Nosotros'
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>
                <div className={styles.contenido}>
                    <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros"/>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum lorem eu risus condimentum dapibus. Sed maximus pulvinar vehicula. Nullam semper ornare dui, vel consectetur nunc porta a. Donec iaculis lorem et tortor luctus, quis malesuada augue tincidunt. Maecenas commodo porta porta. Aenean id tempus tortor. Cras ut turpis luctus, dignissim tortor sit amet, congue massa. Curabitur id finibus est, sed finibus ligula. Nunc vulputate eros tincidunt enim efficitur maximus. Donec consequat dolor eget ligula efficitur pellentesque. Pellentesque mollis sem vitae diam pellentesque, id ultrices turpis sagittis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum lorem eu risus condimentum dapibus. Sed maximus pulvinar vehicula. Nullam semper ornare dui, vel consectetur nunc porta a. Donec iaculis lorem et tortor luctus, quis malesuada augue tincidunt. Maecenas commodo porta porta. Aenean id tempus tortor. Cras ut turpis luctus, dignissim tortor sit amet, congue massa. Curabitur id finibus est, sed finibus ligula. Nunc vulputate eros tincidunt enim efficitur maximus. Donec consequat dolor eget ligula efficitur pellentesque. Pellentesque mollis sem vitae diam pellentesque, id ultrices turpis sagittis.</p>
                    </div>
                </div>

            </main>
        </Layout>
    )
}

export default Nosotros