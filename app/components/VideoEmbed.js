export default function VideoEmbed() {
    return (
        <iframe className="flex-auto md:flex-1 w-full" loading="lazy" width="518" height="315" src="https://www.youtube.com/embed/5EuLfPYE4tw?si=_qbXrQ4ku22ofYPl" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{border: 'none'}}></iframe>
    );
}