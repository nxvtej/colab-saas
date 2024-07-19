/** @format */
"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const addDocumentHandler = async () => {};
const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
	return (
		<Button
			type='submit'
			onClick={addDocumentHandler}
			className='gradient-blue flex gap-1 shadow-md '>
			<Image src={"/assets/icons/add.svg"} alt='add' width={24} height={24} />
			<p className='hidden sm:block '>Start a black document</p>
		</Button>
	);
};

export default AddDocumentBtn;
