import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";

import { base } from "~/constants";

const isProduction = process.env.NODE_ENV === "production";
const PUBLIC_URL = isProduction ? `${base}/static/qr` : "/qr";

import $ from "./style.scss";

const Qr = () => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Varela+Round"],
			},
		});
	}, []);
	return (
		<div className={$.container}>
			<div className={$.card}>
				<div className={$.image}>
					<div
						className={$.fill}
						style={{ backgroundImage: `url(${PUBLIC_URL}/qr.png)` }}
					></div>
				</div>
				<div className={$.title}>Scan me!</div>
				<div className={$.description}>
					Scan this QR code to visit my portfolio.
				</div>
				<div className={$.note}>or</div>
				<a
					className={$.button}
					href="https://alexandrumocanuc.github.io/playground/"
					target="_blank"
				>
					Click me
				</a>
			</div>
		</div>
	);
};

export default Qr;
