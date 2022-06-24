import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";

const isProduction = process.env.NODE_ENV === "production";
const PUBLIC_URL = isProduction ? `${projectBase}/static/faq` : "/faq";

const faqs = [
	{
		heading: "Lorem ipsum",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor mattis magna sed commodo.",
	},
	{
		heading: "Lorem ipsum dolor",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},
	{
		heading: "Lorem ipsum sit amet",
		description: "Lorem ipsum dolor sit amet, consectetur.",
	},
	{
		heading: "Dolor sit amet",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor mo.",
	},
	{
		heading: "Lorem ipsum felis",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		heading: "Lorem ipsum consectetur adipiscing elit",
		description: "Curabitur auctor mattis magna sed commodo.",
	},
];

const Faq = () => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Varela+Round"],
			},
		});

		import("./style.css");
	}, []);

	const [openedIndex, openAccordion] = useState(null);

	return (
		<div className="container">
			<div className="box">
				<div className="columns-2">
					<div className="column">
						<div
							className="image"
							style={{
								backgroundImage: `url(${PUBLIC_URL}/faq.png)`,
							}}
						></div>
					</div>
					<div className="column">
						<div className="title">faq</div>
						{faqs.map((faq, index) => (
							<div
								className={`accordion ${
									openedIndex === index ? "is_open" : null
								}`}
								key={index}
							>
								<div
									className="accordion_top"
									onClick={() =>
										openedIndex === index
											? openAccordion(null)
											: openAccordion(index)
									}
								>
									<div className="heading">{faq.heading}</div>
									<i className="fas fa-chevron-down icon"></i>
								</div>
								{openedIndex === index ? (
									<div className="description">
										{faq.description}
									</div>
								) : null}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faq;
