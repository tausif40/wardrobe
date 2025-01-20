import React from 'react'
import CTA from '../page/CTA'

function PaymentConditions() {
	return (
		<>
			<div className='min-h-[100px] max-h-[400px] w-full overflow-hidden bg-gray-300'>
				<img src='/assets/img/kitchen.jpg' alt="Banner" className='object-bottom w-full' />
			</div>

			<div className="container mx-auto py-12 text-text ">
				<h1 className="text-5xl font-bold mb-6 text-center text-heading ">Payment and Cancellation Terms</h1>

				<div className="space-y-8">
					<section>
						<h2 className="text-xl font-semibold mb-4">OUR TERMS</h2>
						<div className="">
							<p className="">1. Definitions</p>
							<ul className="space-y-2 text-gray-600">
								<li>
									&quot;you&quot; means the person signing below/overleaf (and if more than one, both or all of you;
									your obligations being as individuals and together);
								</li>
								<li>&quot;us&quot; and &quot;we&quot; means Best Fitted Wardrobe;</li>
								<li>&quot;the goods&quot; means the items specified above/overleaf;</li>
								<li>
									&quot;the site&quot; means the place where the goods are to be fitted (as specified above/overleaf);
								</li>
								<li>&quot;the fitter&quot; means the person we contract to fit the goods.</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold mb-4">Payment Terms</h2>
						<ul className="space-y-2 text-gray-600 mb-4">
							<li>50% of deposit required at the time of order</li>
							<li>30% of payment before the installation date</li>
							<li>Remaining, will be paid up on completion of the job.</li>
						</ul>
						<p className="text-gray-600">
							If the payment terms are not met the goods will not be sent to you. If you have not decided on the exact
							specification of the order prior to installation such as colour choice of upholstery, you must still
							comply with the payment terms agreed at the time of placing the order.
						</p>
					</section>

					<section className="space-y-4">
						<p className="">
							2. PLEASE READ THIS CONTRACT CAREFULLY AS WE WILL RELY ON THE TERMS SET OUT HERE AND ABOVE/OVERLEAF AND
							NEITHER WE NOR YOU CAN ALTER THEM WITHOUT THE AGREEMENT OF THE OTHER.
						</p>

						<p className="text-gray-600">
							3. We agree to supply and fit the goods at the site, unless it is stated otherwise above. Our furniture is
							made from parts/which, once installed by our fitter, will form your fitted furniture and fulfil your
							order. The installation process will take between 1-15 working days and we will in any event use our
							reasonable endeavours to complete the installation as soon as we reasonably can.
						</p>

						<p className="text-gray-600">
							4. We will try to fulfil our obligations under this contract within a reasonable time. However, any
							fitting or completion date we give is a guide only and is based upon information given to you and other
							information known to us at the time. We cannot be held liable for delay or failure to complete the works
							caused by events beyond our reasonable control. In those cases we will complete the work as soon as
							reasonably possible.
						</p>
					</section>

					<section>
						<p className="">
							5. If we have agreed with you to arrange for the goods to be fitted, the following applies:
						</p>
						<p className="mb-2 text-gray-600">you agree:</p>
						<ol className="list-decimal pl-5 space-y-3 text-gray-600">
							<li>That you have permission to use any plans or drawings you supply to us</li>
							<li>
								To make sure that any re-routing or installation of plumbing (including water, radiators, drainage, gas,
								sewage and the like), or electrics, removal of existing furniture and carpets have been carried out to a
								good workman-like standard prior to the fitting date;
							</li>
							<li>
								Make sure that the fitter has access to the site at reasonable times (between 8.30am and 6.30pm on
								weekdays) or otherwise as agreed by you and us;
							</li>
							<li>
								To make sure that the fitter can use the mains electricity supply from a standard 13A 240V socket free
								of charge, and that the supply is installed to the usual standards in force at the time;
							</li>
							<li>
								That you will not make any material alterations in the rooms to be fitted, and that in particular you
								have not installed, relocated or removed any fixed items that you have not told us about before we
								entered into this contract;
							</li>
							<li>
								To provide reasonable access to the room to be fitted (ladder access is not acceptable) to clear the
								room to provide sufficient working space for the fitter, and co-operate in reducing health and safety
								risks to an acceptable level;
							</li>
							<li>
								If you wish to cancel or postpone your fitting date within 21 working days of the due date we will incur
								costs and cancellation or postponement may be subject to a £100 charge;
							</li>
							<li>
								You confirm that you have told us of any particular features which you know about the site or its
								construction which may make the installation more difficult than we might reasonably expect. In
								particular, you acknowledge that you have checked the walls are sound;
							</li>
							<li>
								You are advised not to decorate rooms (except the space where front frame furniture is to be installed)
								prior to installation in order to avoid minor incidental damage caused during installation.
							</li>
						</ol>
					</section>

					<section className="space-y-3">
						<p className="text-gray-600">
							10. Changes to the order after survey, if we agree to make at your request, will result in a charge of
							additional cost of the goods involved and possibly a delay in the planned fit date.
						</p>
						<p className="text-gray-600">
							11. We may make improvements to the specifications of the goods (or minor cosmetic changes) or their
							installation before completion of the installation. We will not make any significant changes without your
							agreement.
						</p>
						<p className="text-gray-600">
							12. All our wood products are of a satisfactory quality although as wood is a natural product it can vary
							in grain or colour.
						</p>
						<p className="text-gray-600">
							13.For installation and safety purposes there may be a join in any material over 2,000mm.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-semibold mb-4">Cancellation Terms</h2>
						<div className="space-y-4 text-gray-600">
							<p>
								14. If you ask to cancel the contract we will consider agreeing with in 7 days and cancel your contract
								and notify to you, after 7 days we will incur the following costs:
							</p>
							<ul className="list-disc pl-5 space-y-2">
								<li>
									If we manufactured the goods for your specific needs we will charge you 25% of the contract price.
								</li>
								<li>
									If we start the installation process of your goods we will charge you 70% of the contract price.
								</li>
								<li>If your job is completed we will charge is 100% of the contract price.</li>
							</ul>
						</div>
					</section>

					<section className="space-y-4">
						<p className="text-gray-600">
							15. As the agreement concerns the supply of goods which are made to your specification or are clearly
							personalised, you have no right to cancel under the Consumer Contracts (Information, Cancellation and
							Additional Charges) Regulations 2013.
						</p>
						<p className="text-gray-600">
							16. The legal ownership of the goods will not pass to you until you have paid all of the money you owe us
							whether under this agreement or otherwise. You are responsible for the goods as soon as they are delivered
							to the site and we advise you to check your household insurance to ensure that you are covered.
						</p>
						<p className="text-gray-600">
							17. This contract will end if you become bankrupt or otherwise insolvent, or make any arrangement with
							people you owe money to, in which case we will only carry on work we have started and which has been paid
							for.
						</p>
						<p className="text-gray-600">
							18. If you are not entirely satisfied with your purchase please contact our Customer Service Centre, if
							you remain unhappy with our final response you may be able to refer your complaint to the Furniture
							Ombudsman.
						</p>
					</section>
				</div>


			</div>
			<div className='mb-14'>
				<CTA />
			</div>
		</>
	)
}

export default PaymentConditions