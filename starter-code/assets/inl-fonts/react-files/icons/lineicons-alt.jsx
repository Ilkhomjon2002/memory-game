import React from 'react';

function LineiconsAlt(props) {
	const title = props.title || "lineicons alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="none">
		<path d="M9.5 34.435C8.507 35.547 7.236 36.5 5.25 36.5A4.255 4.255 0 0 1 1 32.25 4.255 4.255 0 0 1 5.25 28c1.986 0 3.297.953 4.25 2.065.993-1.112 2.264-2.065 4.25-2.065A4.255 4.255 0 0 1 18 32.25a4.255 4.255 0 0 1-4.25 4.25c-1.986 0-3.297-.953-4.25-2.065zm5.8-2.185c0-.874-.716-1.589-1.59-1.589-1.112 0-1.787.556-2.582 1.589.795 1.033 1.47 1.589 2.582 1.589.874 0 1.59-.715 1.59-1.589zm-7.468 0c-.795-1.033-1.47-1.589-2.582-1.589-.874 0-1.589.715-1.589 1.589s.715 1.589 1.589 1.589c1.112 0 1.787-.556 2.582-1.589zM21 35.437V28h1.035v6.467h3.233v.97H21zm4.996-5.885v-1.035h1.034v1.035h-1.034zm0 5.885v-5.368h1.034v5.368h-1.034zm13.046-5.885v-1.035h1.035v1.035h-1.035zm0 5.885v-5.368h1.035v5.368h-1.035zm-6.515-3.411a3.583 3.583 0 0 0-.162-.663 2.432 2.432 0 0 0-.355-.63 1.638 1.638 0 0 0-.615-.47 2.308 2.308 0 0 0-.937-.178c-.485 0-.89.098-1.229.308-.162.097-.291.21-.42.34v-.648h-1.035v5.368h1.035v-2.668h.016c0-.323.032-.582.113-.808.065-.226.162-.404.291-.533.13-.13.275-.227.437-.291.161-.065.339-.097.533-.097.291 0 .517.064.695.177.178.114.307.275.404.453.097.194.162.388.194.614.033.227.049.437.049.647v2.506h1.05V32.59l-.008-.088a8.351 8.351 0 0 0-.056-.477zm24.574 0a3.599 3.599 0 0 0-.162-.663 2.432 2.432 0 0 0-.356-.63 1.638 1.638 0 0 0-.614-.47 2.309 2.309 0 0 0-.938-.178c-.485 0-.889.098-1.228.308-.162.097-.291.21-.42.34v-.648h-1.035v5.368h1.034v-2.668h.016c0-.323.033-.582.114-.808.064-.226.161-.404.29-.533.13-.13.276-.227.437-.291.162-.065.34-.097.534-.097.29 0 .517.064.695.177.178.114.307.275.42.453.097.194.162.388.194.614.032.227.049.437.049.647v2.506h1.05V32.59a4.482 4.482 0 0 1-.046-.315v-.001c-.01-.08-.021-.163-.034-.25zm-19.207 1.002h.518c.032-.614-.033-1.132-.227-1.584-.194-.437-.485-.793-.856-1.019-.388-.242-.857-.356-1.39-.356-.518 0-.987.114-1.375.34a2.382 2.382 0 0 0-.922.954c-.226.404-.323.889-.323 1.439 0 .517.113.986.34 1.39.226.404.533.711.937.921.405.227.873.34 1.407.34.517 0 .986-.13 1.423-.372.42-.242.743-.598.953-1.05l-1.018-.308c-.13.259-.323.469-.55.598-.242.146-.517.21-.84.21-.502 0-.873-.145-1.132-.452-.21-.259-.34-.598-.372-1.019h3.427v-.032zM34.79 31.41c.259-.307.647-.469 1.164-.469.47 0 .825.146 1.051.42.162.195.275.486.324.841h-2.894c.08-.323.194-.582.355-.792zm8.504 4.026c-.55 0-1.018-.113-1.406-.356a2.303 2.303 0 0 1-.89-.954c-.21-.404-.307-.873-.307-1.374 0-.517.113-.986.324-1.39.21-.404.5-.728.889-.954.388-.226.857-.34 1.39-.34.582 0 1.083.146 1.504.42.42.276.695.664.824 1.132l-1.035.275a1.304 1.304 0 0 0-.5-.663 1.365 1.365 0 0 0-.809-.242c-.34 0-.614.08-.84.226a1.197 1.197 0 0 0-.486.63c-.113.26-.161.567-.161.906 0 .517.129.954.388 1.277.242.324.614.485 1.115.485.34 0 .598-.08.809-.226.21-.146.371-.356.468-.63l1.051.242a2.245 2.245 0 0 1-.873 1.148c-.388.258-.889.388-1.455.388zm5.69 0c-.533 0-1.002-.113-1.39-.34a2.34 2.34 0 0 1-.905-.954 2.988 2.988 0 0 1-.323-1.39c0-.533.113-1.002.323-1.406.227-.405.517-.712.922-.938.388-.226.857-.34 1.374-.34.533 0 1.002.114 1.39.34.388.226.695.55.922.954.21.404.323.873.323 1.39a3.01 3.01 0 0 1-.323 1.407c-.21.404-.518.71-.922.953a2.94 2.94 0 0 1-1.39.324zm0-.922c.518 0 .89-.161 1.149-.485.258-.323.388-.743.388-1.277 0-.533-.13-.954-.388-1.277-.259-.323-.63-.485-1.148-.485-.356 0-.63.08-.857.226a1.345 1.345 0 0 0-.501.615c-.113.258-.162.565-.162.905 0 .533.13.954.388 1.277.243.34.63.501 1.132.501zm11.22.922c-.646 0-1.18-.13-1.6-.404a1.767 1.767 0 0 1-.76-1.148l1.067-.162c.065.259.227.469.453.63.242.146.534.227.89.227.323 0 .581-.065.759-.194a.603.603 0 0 0 .275-.517.466.466 0 0 0-.097-.308c-.065-.08-.194-.161-.404-.226l-.074-.023c-.206-.063-.49-.151-.864-.252a6.16 6.16 0 0 1-1.1-.372c-.274-.129-.468-.29-.581-.452a1.153 1.153 0 0 1-.178-.63c0-.308.08-.583.258-.81a1.78 1.78 0 0 1 .728-.533c.307-.129.679-.194 1.1-.194.404 0 .775.065 1.099.178.323.13.582.291.776.518.194.226.323.485.355.792l-1.067.178a.858.858 0 0 0-.355-.582 1.35 1.35 0 0 0-.792-.227c-.308-.016-.566.033-.76.146-.194.113-.291.258-.291.452 0 .114.032.21.113.291.08.081.226.162.436.227.21.064.534.161.954.258.453.114.809.227 1.067.372.259.13.453.291.566.47.113.177.178.403.178.662 0 .501-.194.905-.582 1.18-.356.307-.89.453-1.568.453z" fill="#000000" fillRule="evenodd"/>
	</g>
</svg>
	);
};

export default LineiconsAlt;