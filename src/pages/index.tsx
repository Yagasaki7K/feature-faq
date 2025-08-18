import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: #0c1012;
`;

const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Header = styled.div`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  span {
    border-radius: 9999px;
    background: #022c22;
    padding: 4px 20px;
    font-size: 14px;
    font-weight: 500;
    color: #6ee7b7;
  }

  h1 {
    text-align: center;
    font-size: 2.25rem;
    font-weight: bold;
    color: #f3f4f6;
    line-height: 1.2;
  }
`;

const FAQItem = styled.div`
  overflow: hidden;
  border-radius: 8px;
  background: linear-gradient(to bottom right, #121b1b, #141f1f);
  color: #d1d5db;
`;

interface QuestionProps {
	open: boolean;
}

const Question = styled.button<QuestionProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
  background: transparent;
  border: none;
  cursor: pointer;

  h2 {
    font-weight: bold;
    color: #f9fafb;
  }

  svg {
    transition: transform 0.3s ease;
    ${({ open }) => open && "transform: rotate(180deg);"}
  }
`;

interface AnswerProps {
	open: boolean;
}

const Answer = styled.p<AnswerProps>`
  max-height: ${({ open }) => (open ? "200px" : "0")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: translateY(${({ open }) => (open ? "0" : "16px")});
  padding: ${({ open }) => (open ? "0 16px 16px" : "0 16px")};
  color: #9ca3af;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
`;

const Footer = styled.div`
  margin-top: 24px;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  color: #d1d5db;

  span {
    color: #6ee7b7;
  }
`;

interface FAQData {
	question: string;
	answer: string;
}

const faqs: FAQData[] = [
	{
		question: "What is data encryption?",
		answer:
			"Data encryption converts readable information into unreadable code. Only authorized users with the correct key can access it. It protects sensitive data during transfer and storage.",
	},
	{
		question: "How can I keep my passwords secure?",
		answer:
			"Use strong, unique passwords for each account. A password manager can help store them safely. Enable two-factor authentication for extra protection.",
	},
	{
		question: "What should I do if I suspect a security breach?",
		answer:
			"Disconnect affected devices from the network immediately. Change your passwords and notify your IT or security team. Monitor accounts and activity for unusual behavior.",
	},
	{
		question: "Why is regular software updating important?",
		answer:
			"Updates often include patches for newly discovered vulnerabilities. Running outdated software leaves your system exposed. Enable automatic updates whenever possible.",
	},
];

const FAQ: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<Wrapper>
			<Container>
				<Header>
					<span>FAQ</span>
					<h1>
						Frequently asked <br /> questions
					</h1>
				</Header>

				{faqs.map((faq, index) => (
					<FAQItem key={index}>
						<Question
							onClick={() => setOpenIndex(openIndex === index ? null : index)}
							open={openIndex === index}
						>
							<h2>{faq.question}</h2>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 9L12 15L18 9"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</Question>
						<Answer open={openIndex === index}>{faq.answer}</Answer>
					</FAQItem>
				))}

				<Footer>
					Still have questions? Email us at <span>example@gmail.com</span>
				</Footer>
			</Container>
		</Wrapper>
	);
};

export default FAQ;
