import Link from "next/link";

export function HomeSectionPrayers() {
    return (
        <section className="bg-white">
          <section className="h-full py-10 flex flex-col justify-center items-center gap-6 w-full max-w-7xl px-3 mx-auto">
            <div className="w-10">
              <svg data-v-cbd729b4="" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 58 51" aria-labelledby="Mural-de Orações-element" role="presentation"><title id="Mural-de Orações-element">Mural de Orações</title><g fill="currentColor"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" stroke="currentColor" d="M56.784 34.781 47.29 4.478c-.796-2.536-3.705-4.032-6.344-3.273L28.915 4.662C28.516 2.582 26.617 1 24.333 1c-2.572 0-4.666 2.004-4.666 4.469h-14C3.094 5.469 1 7.473 1 9.937v33.514c0 2.464 2.094 4.468 4.667 4.468h10.319c.918 1.37 2.496 2.235 4.27 2.235.498 0 .99-.07 1.464-.205l31.648-9.092c2.171-.623 3.632-2.5 3.632-4.674 0-.48-.073-.953-.216-1.402zM24.349 3.234c1.24 0 2.231.925 2.318 2.083l-.532.152H22c0-1.232 1.053-2.235 2.35-2.235zm2.318 4.469v5.596c0 .61-.524 1.107-1.167 1.107s-1.167-.497-1.167-1.107V8.367l2.334-.664zM5.633 45.685c-1.269 0-2.3-1.002-2.3-2.234V9.937c0-1.232 1.031-2.234 2.3-2.234H18.11l-8.899 2.594c-2.14.623-3.58 2.5-3.58 4.674 0 .48.073.953.214 1.401l9.049 29.313H5.633zm47.065-6.966L21.05 47.81c-1.436.414-3.008-.4-3.44-1.774l-9.494-30.31A2.478 2.478 0 0 1 8 14.972c0-1.178.79-2.196 1.969-2.533L22 8.981v4.308c0 1.848 1.57 3.352 3.5 3.352s3.5-1.504 3.5-3.352V6.97l12.617-3.624a2.83 2.83 0 0 1 .793-.112c1.23 0 2.292.759 2.648 1.886l9.492 30.31c.078.242.117.496.117.755 0 1.179-.791 2.197-1.97 2.534z"></path><path fill-rule="nonzero" d="M33.756 21.622c2.098-.722 4.062-.024 4.979 2.64.502 1.459-.243 3.606-1.893 6.088a28.03 28.03 0 0 1-1.965 2.597 28.164 28.164 0 0 1-.929 1.042l.722-.249-.09-.013a28.164 28.164 0 0 1-1.283-.236 28.275 28.275 0 0 1-3.148-.836c-2.828-.94-4.737-2.174-5.239-3.633-.917-2.663.2-4.423 2.298-5.145 1.142-.393 2.562 0 3.18.895.41.592 1.455.232 1.413-.486-.064-1.087.814-2.27 1.955-2.664zm-2.064 2.35c-.982-1.422-3.126-2.014-4.931-1.393-2.867.988-4.482 3.53-3.306 6.944.67 1.948 2.883 3.378 6.087 4.443 1.086.36 2.213.653 3.32.883a29.732 29.732 0 0 0 1.363.25l.08.012a.867.867 0 0 0 .753-.244 29.732 29.732 0 0 0 .998-1.118 29.787 29.787 0 0 0 2.073-2.74c1.868-2.811 2.732-5.3 2.061-7.248-1.176-3.414-4.013-4.424-6.88-3.437-1.806.622-3.13 2.408-3.03 4.133l1.412-.486z"></path><path d="M24.745 24.42c2.286-.787 4.242-1.218 5.867-1.293.837-.039 1.465-1.096 2.494-1.586.645-.308 1.8-.705 3.462-1.192l2.932 4.026-.624 4.754c-1.84 2.744-3.25 4.374-4.233 4.89-1.14.6-2.47.114-3.61-.028-2.612-.326-4.925-1.823-6.94-4.49l.652-5.081z"></path></g></g></svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 text-center uppercase">Mural de oração</h2>
            <span className="max-w-lg text-center">A oração sincera é o caminho mais puro para conversar com Deus. Abra seu coração, compartilhe seu pedido de oração e ore pelos outros no nosso mural virtual.</span>
            <Link href={'/'} className="h-10 min-w-[168px] border border-gray-800 text-gray-800 px-8 flex items-center justify-center">Fazer um pedido</Link>
          </section>
        </section>
    )
}