export default function VideoEmbed() {
    return (
        <div className="flex items-center">
            <div className="relative w-full">
                <iframe loading="lazy" width="518" height="315" src="https://www.youtube.com/embed/5EuLfPYE4tw?si=_qbXrQ4ku22ofYPl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-lg flex items-center"></iframe>
            </div>
        </div>
    );
}