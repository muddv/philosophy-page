import Header from './Header'
import styles from './styles.module.scss'
import philosopher from './assets/images/philosopher1.png'



export default function Sources() {
    const sources = [{
        id: 'source1',
        name: 'source1',
        author: 'author1'
    }, {
        id: 'source2',
        name: 'source2',
        author: 'author2'
    }, {
        id: 'source3',
        name: 'source3',
        author: 'author3'
    }];
    return (
        <div>
            <div className={styles.background}>
                <Header></Header>
                <div className={styles.sources_container}>
                    <h1 className={styles.page_headeing}>Sources</h1>
                    <div className={styles.sources_text}>
                        <ul>
                            {sources.map(source =>
                                <li key={source.id}>
                                    {source.name} {' '}
                                    {source.author}
                                </li>
                            )}
                        </ul>
                    </div>
                    <img className={styles.sources_image} src={philosopher}></img>
                </div>
            </div>
        </div>
    )
}