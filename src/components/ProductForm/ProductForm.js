import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const ProductForm = ({ categories, sendProduct, product }) => {
	const rateOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const today = new Date();
	const minExpirationDate = today.setDate(today.getDate() + 30); 

	const [name, setName] = useState('');
	const [rating, setRating] = useState(1);
	const [itemCategories, setItemCategories] = useState([]);
	const [hasDate, setHasDate] = useState(false);
	const [expirationDate, setExpirationDate] = useState(minExpirationDate);

	useEffect(() => {
		console.log('use')
		if (product) {
			setName(product.name);
			setRating(product.rating);
			setItemCategories(product.categories);
			setHasDate(!!product.expirationDate);

			if (product.expirationDate) {
				const date = Date.parse(product.expirationDate) < minExpirationDate ? minExpirationDate : Date.parse(product.expirationDate)
				setExpirationDate(date);
			}
		}
	}, [product])

	const onCategoryCheck = e => {
		let currentCategories = itemCategories;
		let value = +e.target.value;

		if (currentCategories.includes(value)) {
			currentCategories = currentCategories.filter(item => item !== value)
		} else {
			currentCategories.push(value);
		}
		setItemCategories([...currentCategories]);
	}

	const disableSubmit = useMemo(() => !name || itemCategories.length < 1 || itemCategories.length >= 5, [name, itemCategories]);

	const onSubmit = e => {
		e.preventDefault();
		sendProduct({
			...product,
			name,
			rating,
			categories: itemCategories,
			expirationDate: hasDate && expirationDate,
			featured: rating > 8
		})
	}

	return (
		<Form>
			<FormGroup>
				<Label for='name'>Name</Label>
				<Input type='text' name="name" id='name' maxLength="200" value={name} onChange={e => setName(e.target.value)}/>
			</FormGroup>
			<FormGroup>
				<Label for="rating">Rating</Label>
				<Input type="select" name="rating" id="rating" value={rating} onChange={e => setRating(e.target.value)}>
					{ rateOptions.map(item => <option key={item}>{item}</option>)}
				</Input>
			</FormGroup>
			<Label >Categories</Label>
			<FormGroup>
				{
					(itemCategories.length < 1 || itemCategories.length >= 5) && (
						<div style={{color: 'red'} }>
							Please, check from 1 to 5 categories 
						</div>
					)
				}
				<ul>
					{
						categories.map(item => 
							<li key={item.id}>
								<Label >
									<Input type="checkbox" value={item.id} checked={itemCategories.includes(item.id)} onChange={e => onCategoryCheck(e)}/>
									{item.name}
								</Label>
								<br></br>
							</li>
						)
					}
				</ul>
      </FormGroup>
			<FormGroup>
				<Label check>
          <Input type="checkbox" checked={hasDate} onChange={e => setHasDate(e.target.checked)}/>
          Does the product have experation date?
        </Label>
			</FormGroup>
			{ hasDate && (
				<FormGroup>
					<Label for="expirationDate">Expiration Date</Label>
					<br></br>
					<DatePicker
						id="expirationDate"
						className={'form-control'}
						selected={expirationDate}
						onChange={setExpirationDate}
						minDate={minExpirationDate}
					/>
				</FormGroup>
				)
			}
			<Button onClick={onSubmit} disabled={disableSubmit}>Submit</Button>
			{!name && (
				<div style={{color: 'red'} }>You have to set the name</div>
			)}
			{(itemCategories.length < 1 || itemCategories.length >= 5) && (
				<div style={{color: 'red'} }>You have to select from 1 to 5 categories</div>
			)}
		</Form>
	)
}

ProductForm.propTypes = {
  categories: PropTypes.array.isRequired,
  sendProduct: PropTypes.func.isRequired,
  product: PropTypes.object
};

export default ProductForm;